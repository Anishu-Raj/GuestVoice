import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {

      await API.post("/auth/forgot-password", { email });
      setSent(true);

    } catch (err) {

      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );

    } finally {

      setSubmitting(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100 flex items-center justify-center px-5 py-16">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mx-auto">
            G
          </div>

          <h1 className="text-3xl font-bold mt-6">
            Forgot Password
          </h1>

          <p className="text-gray-500 mt-3">
            Enter your email and we'll send you a reset link.
          </p>

        </div>

        {sent ? (

          <div className="mt-8 text-center">

            <p className="text-green-600 bg-green-50 rounded-xl p-4">
              If that email is registered, a reset link has been sent. Check your inbox (and spam folder).
            </p>

          </div>

        ) : (

          <form onSubmit={handleSubmit} className="space-y-4 mt-8">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-pink-500"
              required
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-pink-500 hover:bg-pink-600 transition text-white py-4 rounded-xl font-semibold disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Reset Link"}
            </button>

            {error && (
              <p className="text-center text-sm text-red-500">{error}</p>
            )}

          </form>

        )}

        <p className="text-center text-sm text-gray-400 mt-8">
          Remembered your password?{" "}
          <Link to="/login" className="text-pink-500 font-medium">
            Login
          </Link>
        </p>

      </div>

    </div>

  );

}

export default ForgotPassword;
