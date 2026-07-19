import express from "express";

import { generateReply } from "../controllers/aiController.js";

const router = express.Router();

// Generate an AI-suggested reply for a specific review
router.post("/reply/:reviewId", generateReply);

export default router;
