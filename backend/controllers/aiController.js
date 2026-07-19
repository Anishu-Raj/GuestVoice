import Review from "../models/Review.js";
import { generateOwnerReply } from "../utils/aiAnalysis.js";

// =======================================
// POST /api/ai/reply/:reviewId
// Owner-facing AI feature: generate a suggested reply to a guest review.
// =======================================

export const generateReply = async (req, res) => {

  try {

    const review = await Review.findById(req.params.reviewId);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    const reply = await generateOwnerReply(
      review.review,
      review.rating,
      review.sentiment
    );

    review.ownerReply = reply;
    await review.save();

    res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
