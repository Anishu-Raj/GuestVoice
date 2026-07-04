import Review from "../models/Review.js";

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
      homestay: req.params.id,
    }).populate("homestay");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create review
export const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
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