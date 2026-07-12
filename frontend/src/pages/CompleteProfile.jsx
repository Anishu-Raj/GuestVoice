import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Sparkles,
  Home,
  Users,
  Phone,
  MapPin,
  Building2,
  Check,
} from "lucide-react";
function CompleteProfile() {

  const { dbUser } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  role: "owner",
  phone: "",
  homestayName: "",
  city: "",
  state: "",
  propertyType: "",
  rooms: 1,
  businessGoal: "",
  description: "",
});

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };
const propertyTypes = [
  {
    icon: "🏡",
    title: "Villa",
  },
  {
    icon: "🌲",
    title: "Cabin",
  },
  {
    icon: "🌿",
    title: "Eco Stay",
  },
  {
    icon: "🏕",
    title: "Resort",
  },
  {
    icon: "🚜",
    title: "Farm Stay",
  },
  {
    icon: "🏨",
    title: "Hotel",
  },
];

const goals = [
  "Increase Bookings",
  "Improve Ratings",
  "Understand Guest Feedback",
  "Increase Revenue",
];
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/auth/profile/${dbUser._id}`,
        {
          ...formData,
          isProfileCompleted: true,
        }
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

    }

  };

  return (

<div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 py-16 px-6">

<div className="max-w-5xl mx-auto">

<motion.div

initial={{ opacity: 0, y: 30 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: .6 }}

className="bg-white rounded-[35px] shadow-2xl overflow-hidden"
>

<div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 p-10">

<div className="flex justify-between items-center">

<div>

<div className="flex items-center gap-3">

<Sparkles size={34} />

<h1 className="text-4xl font-bold text-white">

GuestVoice

</h1>

</div>

<p className="text-pink-100 mt-3">

AI Powered Customer Experience Platform

</p>

</div>

<div className="bg-white/20 rounded-full px-5 py-2 text-white">

Step 1 of 4

</div>

</div>

<div className="w-full h-2 rounded-full bg-white/20 mt-8">

<div className="w-1/4 h-2 rounded-full bg-white"></div>

</div>

</div>

<form
onSubmit={handleSubmit}
className="p-10 space-y-5"
>

<h2 className="text-3xl font-bold">

Complete Your Profile

</h2>

<p className="text-gray-500 mt-2">

Let's setup your workspace.

</p>

{/* Role Selection */}

<div className="mt-10">

<h3 className="text-xl font-bold text-slate-800">

Choose your account

</h3>

<div className="grid md:grid-cols-2 gap-6 mt-5">

<div

onClick={()=>

setFormData({

...formData,

role:"owner"

})

}

className={`

cursor-pointer

rounded-3xl

border-2

transition

p-7

relative

${

formData.role==="owner"

?

"border-pink-500 bg-pink-50"

:

"border-gray-200"

}

`}

>

{

formData.role==="owner" &&

<div className="absolute right-5 top-5">

<Check className="text-pink-500"/>

</div>

}

<div className="w-14 h-14 rounded-2xl bg-pink-100 flex justify-center items-center">

<Home className="text-pink-600"/>

</div>

<h2 className="font-bold text-xl mt-5">

Homestay Owner

</h2>

<p className="text-gray-500 mt-3">

Manage reviews

AI Dashboard

Business Insights

</p>

</div>

<div

onClick={()=>

setFormData({

...formData,

role:"guest"

})

}

className={`

cursor-pointer

rounded-3xl

border-2

transition

p-7

relative

${

formData.role==="guest"

?

"border-pink-500 bg-pink-50"

:

"border-gray-200"

}

`}

>

{

formData.role==="guest" &&

<div className="absolute right-5 top-5">

<Check className="text-pink-500"/>

</div>

}

<div className="w-14 h-14 rounded-2xl bg-blue-100 flex justify-center items-center">

<Users className="text-blue-600"/>

</div>

<h2 className="font-bold text-xl mt-5">

Guest

</h2>

<p className="text-gray-500 mt-3">

Explore stays

Write reviews

Travel experience

</p>

</div>

</div>

</div>

<div className="grid md:grid-cols-2 gap-6 mt-10">

<div className="mt-8">

<label className="font-semibold flex items-center gap-2">

<Phone size={18}/>

Phone Number

</label>

<input

type="text"

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="+91 9876543210"

className="mt-2 w-full border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

</div>

{formData.role === "owner" && (

<>
{/* ================= BASIC INFORMATION ================= */}

<div className="mt-10">

<h3 className="text-2xl font-bold text-slate-800">

🏡 Tell us about your Homestay

</h3>

<p className="text-gray-500 mt-1">

This information helps GuestVoice personalize AI recommendations.

</p>

</div>

<div className="grid md:grid-cols-2 gap-6 mt-8">

<div>

<label className="font-semibold">

Homestay Name

</label>

<input

type="text"

name="homestayName"

value={formData.homestayName}

onChange={handleChange}

placeholder="Mountain View Homestay"

className="mt-2 w-full rounded-2xl border border-gray-200 p-4 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

<div>

<label className="font-semibold">

Number of Rooms

</label>

<input

type="number"

name="rooms"

value={formData.rooms}

onChange={handleChange}

min={1}

className="mt-2 w-full rounded-2xl border border-gray-200 p-4 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

<div>

<label className="font-semibold">

City

</label>

<input

type="text"

name="city"

value={formData.city}

onChange={handleChange}

placeholder="Mussoorie"

className="mt-2 w-full rounded-2xl border border-gray-200 p-4 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

<div>

<label className="font-semibold">

State

</label>

<input

type="text"

name="state"

value={formData.state}

onChange={handleChange}

placeholder="Uttarakhand"

className="mt-2 w-full rounded-2xl border border-gray-200 p-4 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

</div>

{/* ================= PROPERTY TYPE ================= */}

<div className="mt-12">

<h3 className="text-2xl font-bold">

Choose Property Type

</h3>

<p className="text-gray-500">

Select the category that best matches your business.

</p>

<div className="grid md:grid-cols-3 gap-5 mt-6">

{propertyTypes.map((item) => (

<motion.div

key={item.title}

whileHover={{ scale: 1.03 }}

whileTap={{ scale: .97 }}

onClick={() =>
setFormData({
...formData,
propertyType: item.title,
})
}

className={`

cursor-pointer

rounded-3xl

border-2

p-6

transition

relative

${
formData.propertyType===item.title

?

"border-pink-500 bg-pink-50 shadow-lg"

:

"border-gray-200"

}

`}

>

{

formData.propertyType===item.title &&

<div className="absolute right-4 top-4">

<Check className="text-pink-500"/>

</div>

}

<div className="text-5xl">

{item.icon}

</div>

<h2 className="font-bold text-lg mt-4">

{item.title}

</h2>

</motion.div>

))}

</div>

</div>

{/* ================= BUSINESS GOAL ================= */}

<div className="mt-12">

<h3 className="text-2xl font-bold">

What's your business goal?

</h3>

<p className="text-gray-500">

GuestVoice AI will prioritize recommendations based on this.

</p>

<div className="grid md:grid-cols-2 gap-5 mt-6">

{goals.map((goal) => (

<motion.div

key={goal}

whileHover={{ scale: 1.02 }}

whileTap={{ scale: .98 }}

onClick={()=>

setFormData({

...formData,

businessGoal:goal

})

}

className={`

cursor-pointer

rounded-2xl

border-2

transition

p-6

${
formData.businessGoal===goal

?

"border-pink-500 bg-pink-50"

:

"border-gray-200"

}

`}

>

{

formData.businessGoal===goal &&

<div className="flex justify-end">

<Check className="text-pink-500"/>

</div>

}

<h2 className="font-semibold">

{goal}

</h2>

</motion.div>

))}

</div>

</div>


{/* ================= DESCRIPTION ================= */}

<div className="mt-12">

<h3 className="text-2xl font-bold text-slate-800">

Tell us about your Homestay

</h3>

<p className="text-gray-500 mt-1">

This description helps GuestVoice AI understand your business and generate personalized recommendations.

</p>

<textarea

rows={6}

name="description"

value={formData.description}

onChange={handleChange}

placeholder="Example:

Mountain View Homestay is located in Mussoorie and offers peaceful mountain views, homemade food, free Wi-Fi, and a family-friendly environment."

className="mt-5 w-full rounded-3xl border border-gray-200 p-5 resize-none focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

</>

)}

{formData.role === "guest" && (

<motion.div

initial={{ opacity: 0 }}

animate={{ opacity: 1 }}

className="mt-10 rounded-3xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 p-8"

>

<h2 className="text-2xl font-bold text-pink-600">

Welcome Guest 🎉

</h2>

<p className="mt-3 text-gray-600 leading-7">

As a Guest, you can:

</p>

<div className="grid md:grid-cols-2 gap-4 mt-6">

<div className="bg-white rounded-2xl p-5 shadow">

⭐ Write reviews after your stay

</div>

<div className="bg-white rounded-2xl p-5 shadow">

❤️ Save favourite homestays

</div>

<div className="bg-white rounded-2xl p-5 shadow">

📷 Upload photos (Coming Soon)

</div>

<div className="bg-white rounded-2xl p-5 shadow">

🧳 Share travel experiences

</div>

</div>

</motion.div>

)}
<div className="mt-14">

<button

type="submit"

className="w-full rounded-3xl py-5 text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 shadow-xl hover:scale-[1.02] transition-all duration-300"

>

🚀 Complete Setup

</button>

<p className="text-center text-gray-400 text-sm mt-4">

You can always update these details later from your dashboard.

</p>

</div>
</form>

</motion.div>

</div>
</div>

);
}

export default CompleteProfile;