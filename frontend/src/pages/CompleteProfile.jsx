import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function CompleteProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    role: "owner",
    homestayName: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const navigate=useNavigate();

const {user}=useAuth();
const handleSubmit=async(e)=>{

e.preventDefault();

try{

await axios.put(

"http://localhost:5000/api/auth/complete-profile",

{

email:user.email,

phone:formData.phone,

role:formData.role,

homestayName:formData.homestayName,

location:formData.location,

description:formData.description

}

);

navigate("/dashboard");

}

catch(err){

console.log(err);

}

};
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-slate-800">
            Welcome to GuestVoice 👋
          </h1>

          <p className="text-gray-500 mt-3">
            Let's set up your workspace before getting started.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-2 w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-sky-500"
            />

          </div>

          <div>

            <label className="font-semibold text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="mt-2 w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-sky-500"
            />

          </div>

          <div>

            <label className="font-semibold text-gray-700">
              I am a
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-2 w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-sky-500"
            >

              <option value="owner">
                Homestay Owner
              </option>

              <option value="guest">
                Guest
              </option>

            </select>

          </div>

          {formData.role === "owner" && (

            <>

              <div>

                <label className="font-semibold text-gray-700">
                  Homestay Name
                </label>

                <input
                  type="text"
                  name="homestayName"
                  value={formData.homestayName}
                  onChange={handleChange}
                  placeholder="Mountain Escape Homestay"
                  className="mt-2 w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-sky-500"
                />

              </div>

              <div>

                <label className="font-semibold text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Mussoorie, Uttarakhand"
                  className="mt-2 w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-sky-500"
                />

              </div>

              <div>

                <label className="font-semibold text-gray-700">
                  Short Description
                </label>

                <textarea
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your homestay..."
                  className="mt-2 w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-sky-500"
                />

              </div>

            </>

          )}

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 transition text-white font-semibold py-4 rounded-xl"
          >
            Continue →
          </button>

        </form>

      </div>

    </div>
  );
}

export default CompleteProfile;