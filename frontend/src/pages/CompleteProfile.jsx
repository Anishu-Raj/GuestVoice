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

<div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-blue-50 flex items-center justify-center px-6 py-14">

<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:.6}}

className="w-full max-w-4xl bg-white rounded-[32px] shadow-2xl overflow-hidden border border-pink-100"

>

<div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 p-10 text-white">

<div className="flex items-center gap-3">

<Sparkles size={36}/>

<h1 className="text-4xl font-bold">

Welcome to GuestVoice

</h1>

</div>

<p className="mt-3 text-pink-100 text-lg">

Let's personalize your AI workspace in less than a minute.

</p>

</div>

<form
onSubmit={handleSubmit}
className="p-10 space-y-5"
>

<h2 className="text-3xl font-bold text-slate-800">

Complete Your Profile

</h2>

<p className="text-gray-500">

These details help our AI generate better business insights.

</p>

<div className="grid md:grid-cols-2 gap-5">

<div>

<label className="font-semibold text-gray-700">

Who are you?

</label>

<select
name="role"
value={formData.role}
onChange={handleChange}
className="mt-2 w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
>

<option value="owner">

🏡 Homestay Owner

</option>

<option value="guest">

🧳 Guest

</option>

</select>

</div>

<div>

<label className="font-semibold text-gray-700">

Phone Number

</label>

<input

type="text"

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="9876543210"

className="mt-2 w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

</div>

{

formData.role==="owner" &&

<>

<div className="grid md:grid-cols-2 gap-5">

<input

type="text"

name="homestayName"

value={formData.homestayName}

onChange={handleChange}

placeholder="Homestay Name"

className="p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"

/>

<input

type="text"

name="city"

value={formData.city}

onChange={handleChange}

placeholder="City"

className="p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</div>

<input

type="text"

name="state"

value={formData.state}

onChange={handleChange}

placeholder="State"

className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"

/>
<div>
<label className="font-semibold text-gray-700">
Property Type
</label>

<select
name="propertyType"
value={formData.propertyType}
onChange={handleChange}
className="mt-2 w-full p-4 rounded-2xl border border-gray-200"
>

<option value="">Select Property Type</option>

<option>Villa</option>

<option>Cabin</option>

<option>Eco Stay</option>

<option>Resort</option>

<option>Camping</option>

<option>Farm Stay</option>

<option>Hotel</option>

</select>

</div>
<div>

<label className="font-semibold text-gray-700">

Number of Rooms

</label>

<input

type="number"

name="rooms"

min="1"

value={formData.rooms}

onChange={handleChange}

className="mt-2 w-full p-4 rounded-2xl border border-gray-200"

/>

</div>

<div>

<label className="font-semibold text-gray-700">

Primary Business Goal

</label>

<select

name="businessGoal"

value={formData.businessGoal}

onChange={handleChange}

className="mt-2 w-full p-4 rounded-2xl border border-gray-200"

>

<option value="">Choose Goal</option>

<option>Increase Bookings</option>

<option>Improve Ratings</option>

<option>Understand Guest Feedback</option>

<option>Increase Revenue</option>

<option>Build Brand Reputation</option>

</select>

</div>
<textarea

rows={5}

name="description"

value={formData.description}

onChange={handleChange}

placeholder="Describe your homestay..."

className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"

/>

</>

}

{

formData.role==="guest" &&

<div className="bg-pink-50 rounded-2xl p-6 text-pink-700">

Guest accounts can discover homestays, save favourites,

write reviews and manage trips.

</div>

}

<button

type="submit"

className="w-full py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:scale-[1.02] transition"

>

Complete Setup →

</button>

</form>

</motion.div>

</div>

);
}

export default CompleteProfile;