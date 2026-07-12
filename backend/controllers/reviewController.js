import Review from "../models/Review.js";
import Homestay from "../models/Homestay.js";
import User from "../models/User.js";
// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("homestay");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get reviews of one homestay
export const getReviewsByHomestay = async (req, res) => {

  try {

    const reviews = await Review.find({
      homestayId: req.params.id,
    })
      .populate("userId", "name photo");

    res.json(reviews);

  }

  catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Create review
export const createReview = async (req, res) => {
  try {

    const {
      homestayId,
      userId,
      rating,
      review,
    } = req.body;

    // Check User

    const user = await User.findById(userId);

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "Guest not found",
      });

    }

    // Check Homestay

    const homestay = await Homestay.findById(homestayId);

    if (!homestay) {

      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });

    }

    // Create Review

    const newReview = await Review.create({
      homestayId,
      userId,
      rating,
      review,
    });

    // Fetch all reviews of this homestay

    const reviews = await Review.find({
      homestayId,
    });

    // Calculate Average Rating

    const totalRating = reviews.reduce(
      (sum, item) => sum + item.rating,
      0
    );

    homestay.totalReviews = reviews.length;

    homestay.averageRating =
      totalRating / reviews.length;

    await homestay.save();

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      review: newReview,
    });

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// Update review
export const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete review
export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.json({
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};