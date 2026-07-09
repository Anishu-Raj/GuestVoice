import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// =============================
// Register User
// =============================
export const registerUser = async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    // Validation
    if (!name || !email || !password) {

      return res.status(400).json({
        message: "Please fill all required fields",
      });

    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    // Create user
    const user = await User.create({

      name,

      email,

      password,

      role,

    });

    res.status(201).json({

      _id: user._id,

      name: user.name,

      email: user.email,

      role: user.role,

      token: generateToken(user._id),

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};