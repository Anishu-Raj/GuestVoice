import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ================= REGISTER =================

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      firebaseUID: "LOCAL_USER",
    });

    res.status(201).json({
      success: true,
      message: "Registration Successful",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// ================= LOGIN =================

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {

      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });

    }

    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    res.json({

      success: true,

      token,

      user,

    });

  }

  catch (err) {

    res.status(500).json({

      success: false,

      message: err.message,

    });

  }

};

// ================= UPDATE PROFILE =================

export const updateProfile = async (req, res) => {

  try {

    const user = await User.findByIdAndUpdate(

      req.params.id,

      {

        ...req.body,

        isProfileCompleted: true,

      },

      {

        new: true,

      }

    );

    res.json(user);

  }

  catch (err) {

    res.status(500).json({

      message: err.message,

    });

  }

};