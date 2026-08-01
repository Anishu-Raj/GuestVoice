import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Register() {

  const navigate = useNavigate();
  const { registerWithEmail, dbUser, loading } = useAuth();

  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {

    if (!loading && dbUser) {
      navigate("/redirect");
    }

  }, [loading, dbUser, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setSubmitting(true);

    try {

      await registerWithEmail(
        formData.name,
        formData.email,
        formData.password
      );

      toast.success("Registration successful");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Registration failed"
      );

    } finally {

      setSubmitting(false);

    }

  };

  return (

    <div className="min-h-screen flex">

      {/* Left — photo panel, hidden on mobile */}
      <div className="hidden lg:block lg:w-1/2 relative">

        <img
          src="https://picsum.photos/seed/guestvoice-register/900/1200"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-950/30 to-rose-950/10" />

        <div className="absolute bottom-14 left-12 right-12">
          <p className="text-gold-400 uppercase tracking-[3px] text-sm font-mono">
            GuestVoice
          </p>
          <h2 className="text-white text-3xl font-bold mt-3 leading-snug">
            Join homestay owners using AI to understand their guests.
          </h2>
        </div>

      </div>

      {/* Right — form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 py-16 bg-blush-100">

        <div className="w-full max-w-md">

          <div className="text-center">

            <div className="w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center text-white text-3xl font-bold mx-auto">
              G
            </div>

            <h1 className="text-3xl font-bold mt-6 text-rose-950">
              Create your account
            </h1>

            <p className="text-gray-500 mt-3">
              Join GuestVoice as a guest or a homestay owner
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-8">

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-rose-950/10 bg-white p-4 rounded-xl focus:outline-none focus:border-rose-500"
              required
              minLength={6}
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-rose-600 hover:bg-rose-700 transition text-white py-4 rounded-xl font-semibold disabled:opacity-60"
            >
              {submitting ? "Creating account..." : "Register"}
            </button>

          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-rose-600 font-medium">
              Login
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-3">
            You'll choose whether you're a guest or an owner right after this.
          </p>

        </div>

      </div>

    </div>

  );

}

export default Register;
