import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import reviewRoutes from "./routes/reviewRoutes.js";
import homestayRoutes from "./routes/homestayRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import rateLimit from "express-rate-limit";
dotenv.config();

const app = express();
const authLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 1 minute."
  },
});
// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();
app.use("/api/auth", authLimiter);
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/homestays", homestayRoutes);
app.use("/api/dashboard", dashboardRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("🚀 GuestVoice Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});