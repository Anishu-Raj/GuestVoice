import express from "express";
import { getOwnerDashboard } from "../controllers/dashboardController.js";

const router = express.Router();

// Owner Dashboard
router.get("/owner/:ownerId", getOwnerDashboard);

export default router;