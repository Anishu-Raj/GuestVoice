import express from "express";
import { getAllHomestays } from "../controllers/homestayController.js";

const router = express.Router();

router.get("/", getAllHomestays);

export default router;