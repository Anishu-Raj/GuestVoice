import express from "express";

import {
  getAllHomestays,
  searchHomestay,
} from "../controllers/homestayController.js";

const router = express.Router();

router.get("/", getAllHomestays);

router.get("/search", searchHomestay);

export default router;