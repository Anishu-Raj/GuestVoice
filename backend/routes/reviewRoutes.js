import express from "express";

import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
  getReviewStats,
  getReviewsByHomestay,
} from "../controllers/reviewController.js";

const router = express.Router();

/*
====================================
Review Routes
====================================
*/

// Get Review Statistics
router.get("/stats", getReviewStats);

// Search Reviews
router.get("/search", searchReviews);

// Get Reviews of Particular Homestay
router.get("/homestay/:id", getReviewsByHomestay);

// Get All Reviews
router.get("/", getAllReviews);

// Get Review by ID
router.get("/:id", getReviewById);

// Create Review
router.post("/", createReview);

// Update Review
router.put("/:id", updateReview);

// Delete Review
router.delete("/:id", deleteReview);

export default router;