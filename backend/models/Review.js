import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    homestayId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Homestay",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    review: {
      type: String,
      required: true,
      trim: true,
    },

    sentiment: {
      type: String,
      enum: ["Positive", "Neutral", "Negative"],
      default: "Neutral",
    },

    topics: [
      {
        type: String,
      },
    ],

    summary: {
      type: String,
      default: "",
    },

    aiRecommendation: {
      type: String,
      default: "",
    },

    ownerReply: {
      type: String,
      default: "",
    },

    confidence: {
      type: Number,
      default: 0,
    },

    isEdited: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Review", reviewSchema);