import Homestay from "../models/Homestay.js";
import User from "../models/User.js";

// Create Homestay
export const createHomestay = async (req, res) => {
  try {

    const {
      ownerId,
      name,
      propertyType,
      country,
      state,
      city,
      description,
      rooms,
      maxGuests,
      amenities,
      businessGoal,
    } = req.body;

    // Check Owner

    const owner = await User.findById(ownerId);

    if (!owner) {
      return res.status(404).json({
        success: false,
        message: "Owner not found",
      });
    }

    // Check Existing Homestay

    const existingHomestay = await Homestay.findOne({
      ownerId,
    });

    if (existingHomestay) {
      return res.status(400).json({
        success: false,
        message: "Owner already has a homestay",
      });
    }

    // Create Homestay

    const homestay = await Homestay.create({
      ownerId,
      name,
      propertyType,
      country,
      state,
      city,
      description,
      rooms,
      maxGuests,
      amenities,
      businessGoal,
    });

    // Update User

    owner.homestayId = homestay._id;

    await owner.save();

    res.status(201).json({
      success: true,
      message: "Homestay created successfully",
      homestay,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Single Homestay

export const getHomestay = async (req, res) => {

  try {

    const homestay = await Homestay.findById(req.params.id)
      .populate("ownerId", "name email photo");

    if (!homestay) {

      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });

    }

    res.json(homestay);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};