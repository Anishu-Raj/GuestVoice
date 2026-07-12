import express from "express";

import User from "../models/User.js";

import {

register,

login,

updateProfile,

} from "../controllers/authController.js";

const router = express.Router();


// ================= LOCAL AUTH =================

router.post("/register", register);

router.post("/login", login);


// ================= GOOGLE LOGIN =================

router.post("/google", async (req, res) => {

try {

const { name, email, photo, uid } = req.body;

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

res.json(user);

}

catch (error) {

res.status(500).json({

message: error.message,

});

}

});


// ================= COMPLETE PROFILE =================

router.put("/complete-profile", async (req, res) => {

try {

const {

email,

phone,

role,

homestayName,

location,

description,

} = req.body;

const user = await User.findOneAndUpdate(

{ email },

{

phone,

role,

homestayName,

location,

description,

isProfileCompleted: true,

},

{

new: true,

}

);

res.json(user);

}

catch (error) {

res.status(500).json({

message: error.message,

});

}

});


// ================= UPDATE PROFILE =================

router.put("/profile/:id", updateProfile);

export default router;