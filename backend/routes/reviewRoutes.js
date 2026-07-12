import express from "express";

import {
  getAllReviews,
  getReviewsByHomestay,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

/*
--------------------------------------------------
Review Routes
--------------------------------------------------
*/

// Get all reviews (Admin / Testing)
router.get("/", getAllReviews);

// Get reviews of a particular homestay
router.get("/homestay/:id", getReviewsByHomestay);

// Submit new review
router.post("/", createReview);

// Update review
router.put("/:id", updateReview);

// Delete review
router.delete("/:id", deleteReview);

export default router;