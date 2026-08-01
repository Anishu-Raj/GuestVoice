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

    <div className="min-h-screen flex">

      {/* Left — photo panel, hidden on mobile */}
      <div className="hidden lg:block lg:w-1/2 relative">

        <img
          src="https://picsum.photos/seed/guestvoice-login/900/1200"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-950/30 to-rose-950/10" />

        <div className="absolute bottom-14 left-12 right-12">
          <p className="text-gold-400 uppercase tracking-[3px] text-sm font-mono">
            GuestVoice
          </p>
          <h2 className="text-white text-3xl font-bold mt-3 leading-snug">
            Because Every Review Matters.
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
              Welcome back
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
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-rose-600 hover:bg-rose-700 transition text-white py-4 rounded-xl font-semibold disabled:opacity-60"
            >
              {submitting ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex-1 h-px bg-rose-950/10" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-rose-950/10" />
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={signingIn}
            className="mt-6 w-full flex items-center justify-center gap-4 bg-white border-2 border-rose-950/10 rounded-xl py-4 hover:border-rose-400 hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <FcGoogle size={24} />
            <span className="font-semibold text-rose-950">
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
            <Link to="/register" className="text-rose-600 font-medium">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;
