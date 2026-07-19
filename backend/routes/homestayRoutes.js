import express from "express";
import {
  createHomestay,
  getHomestay,
  getAllHomestays,
   searchHomestays,
} from "../controllers/homestayController.js";

const router = express.Router();

router.get("/", getAllHomestays);
router.get("/search", searchHomestays);
router.get("/:id", getHomestay);
router.post("/", createHomestay);



export default router;