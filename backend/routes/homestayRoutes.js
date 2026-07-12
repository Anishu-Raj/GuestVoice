import express from "express";
import {
  createHomestay,
  getHomestay,
} from "../controllers/homestayController.js";

const router = express.Router();


router.post("/", createHomestay);

router.get("/:id", getHomestay);

export default router;