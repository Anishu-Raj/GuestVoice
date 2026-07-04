import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import homestayRoutes from "./routes/homestayRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server Running on Port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err.message);
  });

app.use("/api/reviews", reviewRoutes);
app.use("/api/homestays", homestayRoutes);