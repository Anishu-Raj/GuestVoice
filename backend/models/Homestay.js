import mongoose from "mongoose";

const homestaySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    owner: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Budget", "Standard", "Luxury"],
      default: "Standard",
    },

    description: {
      type: String,
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

export default mongoose.model("Homestay", homestaySchema);