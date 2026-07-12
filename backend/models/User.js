import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
    type: String,
    required: true,
},
    phone: {
      type: String,
      default: "",
    },

    photo: {
      type: String,
      default: "",
    },

    firebaseUID: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["owner", "guest", "admin"],
      default: "guest",
    },

    homestayId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Homestay",
    default: null
},
    isProfileCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);