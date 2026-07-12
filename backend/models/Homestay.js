import mongoose from "mongoose";

const homestaySchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    propertyType: {
      type: String,
      enum: [
        "Villa",
        "Cabin",
        "Eco Stay",
        "Resort",
        "Camping",
        "Farm Stay",
        "Hotel",
      ],
      required: true,
    },

    country: {
      type: String,
      default: "India",
    },

    state: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    rooms: {
      type: Number,
      default: 1,
    },

    maxGuests: {
      type: Number,
      default: 2,
    },

    amenities: [
      {
        type: String,
      },
    ],

    businessGoal: {
      type: String,
      default: "",
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Homestay", homestaySchema);