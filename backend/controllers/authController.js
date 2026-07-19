import User from "../models/User.js";
import Homestay from "../models/Homestay.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// =======================================
// Register
// =======================================

export const register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {

      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });

    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({

      name,

      email,

      password: hashedPassword,

      role: "guest",

    });

    res.status(201).json({

      success: true,

      token: generateToken(user._id),

      user,

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// =======================================
// Login
// =======================================

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({

        success: false,

        message: "Invalid Email",

      });

    }

    if (!user.password) {

      return res.status(400).json({

        success: false,

        message: "This account uses Google Sign-In. Please continue with Google instead.",

      });

    }

    const isMatch = await bcrypt.compare(

      password,

      user.password

    );

    if (!isMatch) {

      return res.status(400).json({

        success: false,

        message: "Invalid Password",

      });

    }

    res.json({

      success: true,

      token: generateToken(user._id),

      user,

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// =======================================
// Google Login
// =======================================

export const googleLogin = async (req, res) => {

  try {

    const {

      name,

      email,

      photo,

      uid,

    } = req.body;

    let user = await User.findOne({ email });

    if (!user) {

      user = await User.create({

        name,

        email,

        photo,

        firebaseUID: uid,

        password: "",

      });

    }

    res.json({

      success: true,

      token: generateToken(user._id),

      user,

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// =======================================
// Update Profile
// =======================================

export const updateProfile = async (req, res) => {

  try {

    const {
      role,
      phone,
      homestayName,
      city,
      state,
      propertyType,
      rooms,
      businessGoal,
      description,
    } = req.body;

    // 1. Update the User document (only fields that actually belong to User)

    const user = await User.findByIdAndUpdate(

      req.params.id,

      {
        role,
        phone,
        isProfileCompleted: true,
      },

      {

        new: true,

      }

    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // 2. If they registered as an owner, create (or update) their Homestay too.
    //    Previously this step was missing entirely, so the dashboard had
    //    nothing to show ("Homestay not found").

    let homestay = null;

    if (role === "owner") {

      homestay = await Homestay.findOne({ ownerId: user._id });

      if (homestay) {

        homestay.name = homestayName || homestay.name;
        homestay.city = city || homestay.city;
        homestay.state = state || homestay.state;
        homestay.propertyType = propertyType || homestay.propertyType;
        homestay.rooms = rooms || homestay.rooms;
        homestay.businessGoal = businessGoal || homestay.businessGoal;
        homestay.description = description || homestay.description;

        await homestay.save();

      } else {

        homestay = await Homestay.create({
          ownerId: user._id,
          name: homestayName,
          city,
          state,
          propertyType,
          rooms,
          businessGoal,
          description,
        });

        user.homestayId = homestay._id;
        await user.save();

      }

    }

    res.json({

      success: true,

      user,

      homestay,

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// =======================================
// Current Logged In User
// =======================================

export const getCurrentUser = async (req, res) => {

  res.json(req.user);

};