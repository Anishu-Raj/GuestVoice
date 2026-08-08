import express from "express";

import {
  register,
  login,
  googleLogin,
  updateProfile,
  getCurrentUser,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ================= REGISTER =================

router.post("/register", register);

// ================= LOGIN =================

router.post("/login", login);

// ================= GOOGLE LOGIN =================

router.post("/google", googleLogin);

// ================= UPDATE PROFILE =================

router.put("/profile/:id", updateProfile);

// ================= CURRENT LOGGED-IN USER =================

router.get("/me", protect, getCurrentUser);

// ================= FORGOT / RESET PASSWORD =================

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;