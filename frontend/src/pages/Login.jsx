import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

function Login() {

  const { loginWithGoogle, loginWithEmail, dbUser, loading } = useAuth();

  const navigate = useNavigate();

  const [signingIn, setSigningIn] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Once login succeeds (either Google or email/password) and we get the
  // user back from our backend, send them onward. AuthRedirect (at /redirect)
  // already knows how to route by role (owner -> dashboard, guest ->
  // guest-dashboard, admin -> admin-dashboard) and by whether their profile
  // is complete yet.
  useEffect(() => {

    if (!loading && dbUser) {
      navigate("/redirect");
    }

  }, [loading, dbUser, navigate]);

  const handleGoogleLogin = async () => {

    setError("");
    setSigningIn(true);

    try {

      await loginWithGoogle();

    } catch (err) {

      console.error("Google sign-in failed:", err);

      if (err.code === "auth/unauthorized-domain") {
        setError(
          "This domain isn't authorized in Firebase yet. Add it under Firebase Console → Authentication → Settings → Authorized domains."
        );
      } else if (err.code === "auth/popup-closed-by-user") {
        setError("Sign-in popup was closed before finishing. Please try again.");
      } else if (err.code === "auth/popup-blocked") {
        setError("Your browser blocked the sign-in popup. Allow popups for this site and try again.");
      } else {
        setError("Something went wrong signing in. Please try again.");
      }

    } finally {

      setSigningIn(false);

    }

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailLogin = async (e) => {

    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {

      await loginWithEmail(formData.email, formData.password);

    } catch (err) {

      setError(
        err.response?.data?.message || "Invalid email or password."
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
            Welcome to GuestVoice
          </h1>

          <p className="text-gray-500 mt-3">
            AI Powered Hospitality Intelligence
          </p>

        </div>

        <form onSubmit={handleEmailLogin} className="space-y-4 mt-8">

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
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-sky-500 hover:bg-sky-600 transition text-white py-4 rounded-xl font-semibold disabled:opacity-60"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="flex items-center gap-4 mt-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={signingIn}
          className="mt-6 w-full flex items-center justify-center gap-4 bg-white border-2 border-gray-200 rounded-xl py-4 hover:border-blue-500 hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <FcGoogle size={24} />
          <span className="font-semibold">
            {signingIn ? "Signing in..." : "Continue with Google"}
          </span>
        </button>

        {error && (
          <p className="text-center text-sm text-red-500 mt-4">
            {error}
          </p>
        )}

        <p className="text-center text-sm text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500 font-medium">
            Register
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Login;
