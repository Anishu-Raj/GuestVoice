import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// ===============================
// Register User
// ===============================

export const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({
                message: "Please fill all fields"
            });

        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });

        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({

            name,

            email,

            password: hashedPassword

        });

        res.status(201).json({

            _id: user._id,

            name: user.name,

            email: user.email,

            role: user.role,

            token: generateToken(user._id)

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

// ===============================
// Login User
// ===============================

export const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "Invalid Email"

            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }

        res.json({

            _id: user._id,

            name: user.name,

            email: user.email,

            role: user.role,

            token: generateToken(user._id)

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};