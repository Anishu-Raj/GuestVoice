import express from "express";

import {
  getAllReviews,
  getReviewsByHomestay,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getAllReviews);

router.get("/homestay/:id", getReviewsByHomestay);

router.post("/", createReview);

router.put("/:id", updateReview);

router.delete("/:id", deleteReview);

export default router;