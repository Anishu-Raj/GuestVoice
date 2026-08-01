import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { Home, User2 } from "lucide-react";

function CompleteProfile() {

  const navigate = useNavigate();
  const { dbUser, updateDbUser } = useAuth();

  const [role, setRole] = useState(null); // "guest" | "owner"
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    homestayName: "",
    city: "",
    state: "",
    propertyType: "Homestay",
    rooms: "",
    businessGoal: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!role) {
      toast.error("Please choose whether you're a guest or an owner");
      return;
    }

    if (role === "owner" && !formData.homestayName.trim()) {
      toast.error("Homestay name is required for owners");
      return;
    }

    setSubmitting(true);

    try {

      const { data } = await API.put(`/auth/profile/${dbUser._id}`, {
        role,
        ...formData,
      });

      updateDbUser(data.user);

      toast.success("Profile completed!");

      navigate("/redirect");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Could not complete profile"
      );

    } finally {

      setSubmitting(false);

    }

  };

  return (

    <div className="min-h-screen bg-blush-100 flex items-center justify-center px-5 py-16">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 md:p-12">

        <p className="text-gold-600 uppercase tracking-[3px] text-xs font-mono">
          One last step
        </p>

        <h1 className="font-display text-3xl font-semibold text-rose-950 mt-2">
          Complete your profile
        </h1>

        <p className="text-gray-500 mt-2">
          Tell us a bit about yourself so GuestVoice can show you the right dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Role selection */}
          <div>
            <label className="block mb-3 font-medium text-rose-950">
              I am a...
            </label>

            <div className="grid grid-cols-2 gap-4">

              <button
                type="button"
                onClick={() => setRole("guest")}
                className={`flex flex-col items-center gap-2 border-2 rounded-2xl p-6 transition ${
                  role === "guest"
                    ? "border-rose-600 bg-rose-50"
                    : "border-rose-950/10 hover:border-rose-300"
                }`}
              >
                <User2 className={role === "guest" ? "text-rose-600" : "text-gray-400"} size={28} />
                <span className="font-semibold text-rose-950">Guest</span>
                <span className="text-xs text-gray-400 text-center">
                  I stay at homestays and leave reviews
                </span>
              </button>

              <button
                type="button"
                onClick={() => setRole("owner")}
                className={`flex flex-col items-center gap-2 border-2 rounded-2xl p-6 transition ${
                  role === "owner"
                    ? "border-rose-600 bg-rose-50"
                    : "border-rose-950/10 hover:border-rose-300"
                }`}
              >
                <Home className={role === "owner" ? "text-rose-600" : "text-gray-400"} size={28} />
                <span className="font-semibold text-rose-950">Homestay Owner</span>
                <span className="text-xs text-gray-400 text-center">
                  I manage a homestay and want AI insights on reviews
                </span>
              </button>

            </div>
          </div>

          {/* Phone — common to both roles */}
          <div>
            <label className="block mb-2 font-medium text-rose-950">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
              required
            />
          </div>

          {/* Homestay details — only for owners */}
          {role === "owner" && (
            <div className="space-y-4 border-t border-rose-950/10 pt-6">

              <p className="font-medium text-rose-950">
                Tell us about your homestay
              </p>

              <input
                name="homestayName"
                value={formData.homestayName}
                onChange={handleChange}
                placeholder="Homestay Name"
                className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
                />
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
                >
                  <option>Homestay</option>
                  <option>Guesthouse</option>
                  <option>Farmstay</option>
                  <option>Cottage</option>
                </select>

                <input
                  name="rooms"
                  type="number"
                  min="1"
                  value={formData.rooms}
                  onChange={handleChange}
                  placeholder="Number of rooms"
                  className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
                />
              </div>

              <select
                name="businessGoal"
                value={formData.businessGoal}
                onChange={handleChange}
                className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
              >
                <option value="">What's your main goal on GuestVoice?</option>
                <option value="More bookings">Get more bookings</option>
                <option value="Improve service">Improve guest experience</option>
                <option value="Understand feedback">Understand feedback faster</option>
              </select>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="A few lines about your homestay..."
                rows={3}
                className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
              />

            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-rose-600 hover:bg-rose-700 transition text-white py-4 rounded-xl font-semibold disabled:opacity-60"
          >
            {submitting ? "Saving..." : "Complete Profile"}
          </button>

        </form>

      </div>

    </div>

  );

}

export default CompleteProfile;
