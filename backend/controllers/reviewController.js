import Review from "../models/Review.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("homestay");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get review by ID
export const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("homestay");

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.json(review);
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

    res.status(201).json({
      message: "Review Added Successfully",
      review,
    });
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

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.json({
      message: "Review Updated Successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete review
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.json({
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Search Reviews
export const searchReviews = async (req, res) => {
  try {
    const keyword = req.query.q || "";

    const reviews = await Review.find({
      review: {
        $regex: keyword,
        $options: "i",
      },
    }).populate("homestay");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Reviews by Homestay
export const getReviewsByHomestay = async (req, res) => {
  try {
    const reviews = await Review.find({
      homestay: req.params.id,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Review Statistics
export const getReviewStats = async (req, res) => {
  try {
    const totalReviews = await Review.countDocuments();

    const average = await Review.aggregate([
      {
        $group: {
          _id: null,
          averageRating: {
            $avg: "$rating",
          },
        },
      },
    ]);

    res.json({
      totalReviews,
      averageRating:
        average.length > 0 ? average[0].averageRating.toFixed(2) : 0,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};