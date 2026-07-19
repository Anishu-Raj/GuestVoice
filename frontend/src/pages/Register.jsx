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

  // After a successful register, dbUser gets set — send them to /redirect,
  // which will land them on Complete Profile since isProfileCompleted is
  // still false at this point.
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

    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-purple-100 flex items-center justify-center px-5 py-16">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center text-white text-3xl font-bold mx-auto">
            G
          </div>

          <h1 className="text-3xl font-bold mt-6">
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
            className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-sky-500"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-sky-500"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-sky-500"
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-sky-500 hover:bg-sky-600 transition text-white py-4 rounded-xl font-semibold disabled:opacity-60"
          >
            {submitting ? "Creating account..." : "Register"}
          </button>

        </form>

        <p className="text-center text-sm text-gray-400 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500 font-medium">
            Login
          </Link>
        </p>

        <p className="text-center text-xs text-gray-400 mt-3">
          You'll choose whether you're a guest or an owner right after this.
        </p>

      </div>

    </div>

  );

}

export default Register;
