import Homestay from "../models/Homestay.js";

// Get all homestays
export const getAllHomestays = async (req, res) => {
  try {
    const homestays = await Homestay.find().sort({ name: 1 });

    res.json(homestays);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Search homestay
export const searchHomestay = async (req, res) => {
  try {
    const keyword = req.query.name;

    const homestays = await Homestay.find({
      name: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.json(homestays);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};