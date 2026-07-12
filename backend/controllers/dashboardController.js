import User from "../models/User.js";
import Homestay from "../models/Homestay.js";
import Review from "../models/Review.js";

export const getOwnerDashboard = async (req, res) => {
  try {
    const { ownerId } = req.params;

    // Find Owner
    const owner = await User.findById(ownerId);

    if (!owner) {
      return res.status(404).json({
        success: false,
        message: "Owner not found",
      });
    }

    // Find Homestay
    const homestay = await Homestay.findOne({ ownerId });

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    // Fetch Reviews
    const reviews = await Review.find({
      homestayId: homestay._id,
    })
      .populate("userId", "name photo")
      .sort({ createdAt: -1 });

    // Dashboard Response
    res.status(200).json({
      success: true,

      owner: {
        id: owner._id,
        name: owner.name,
        email: owner.email,
        photo: owner.photo,
      },

      homestay,

      stats: {
        averageRating: homestay.averageRating,
        totalReviews: homestay.totalReviews,
      },

      recentReviews: reviews.slice(0, 5),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};