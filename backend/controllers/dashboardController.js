import User from "../models/User.js";
import Homestay from "../models/Homestay.js";
import Review from "../models/Review.js";

export const getOwnerDashboard = async (req, res) => {
  try {
    const { ownerId } = req.params;

    // Find Owner
    const owner = await User.findById(ownerId);

    if (!owner) {
      return res.status(404).json({
        success: false,
        message: "Owner not found",
      });
    }

    // Find Homestay
    const homestay = await Homestay.findOne({ ownerId });

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    // Fetch Reviews
    const reviews = await Review.find({
      homestayId: homestay._id,
    })
      .populate("userId", "name photo")
      .sort({ createdAt: -1 });

    // ---- Aggregate real AI data from the stored reviews ----

    const total = reviews.length || 1; // avoid divide-by-zero when there are no reviews yet

    const sentimentCounts = { Positive: 0, Neutral: 0, Negative: 0 };
    const topicCounts = {};

    reviews.forEach((r) => {
      sentimentCounts[r.sentiment] = (sentimentCounts[r.sentiment] || 0) + 1;

      (r.topics || []).forEach((topic) => {
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;
      });
    });

    const sentimentBreakdown = {
      positive: Math.round((sentimentCounts.Positive / total) * 100),
      neutral: Math.round((sentimentCounts.Neutral / total) * 100),
      negative: Math.round((sentimentCounts.Negative / total) * 100),
    };

    const topKeywords = Object.entries(topicCounts)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const negativeAlerts = reviews
      .filter((r) => r.sentiment === "Negative" && r.aiRecommendation)
      .slice(0, 5)
      .map((r) => ({
        issue: r.aiRecommendation,
        review: r.review,
        reviewId: r._id,
      }));

    // Dashboard Response
    res.status(200).json({
      success: true,

      owner: {
        id: owner._id,
        name: owner.name,
        email: owner.email,
        photo: owner.photo,
      },

      homestay,

      stats: {
        averageRating: homestay.averageRating,
        totalReviews: homestay.totalReviews,
      },

      sentimentBreakdown,
      topKeywords,
      negativeAlerts,

      recentReviews: reviews.slice(0, 5),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};