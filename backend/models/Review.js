import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    homestay: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Homestay",
      required: true,
    },

    guestName: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    review: {
      type: String,
      required: true,
    },

    sentiment: {
      type: String,
      enum: ["Positive", "Neutral", "Negative"],
      default: "Neutral",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

export default mongoose.model("Review", reviewSchema);