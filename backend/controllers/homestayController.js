import Homestay from "../models/Homestay.js";

export const getAllHomestays = async (req, res) => {
  try {
    const homestays = await Homestay.find();

    res.json(homestays);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};