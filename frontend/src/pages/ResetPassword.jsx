import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../services/api";

function ResetPassword() {

  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setSubmitting(true);

    try {

      await API.post(`/auth/reset-password/${token}`, { password });

      toast.success("Password updated — please log in");
      navigate("/login");

    } catch (err) {

      setError(
        err.response?.data?.message || "This link is invalid or has expired."
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
            Reset Password
          </h1>

          <p className="text-gray-500 mt-3">
            Choose a new password for your account.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">

          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-pink-500"
            required
            minLength={6}
          />

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-pink-500"
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-pink-500 hover:bg-pink-600 transition text-white py-4 rounded-xl font-semibold disabled:opacity-60"
          >
            {submitting ? "Updating..." : "Update Password"}
          </button>

          {error && (
            <p className="text-center text-sm text-red-500">{error}</p>
          )}

        </form>

        <p className="text-center text-sm text-gray-400 mt-8">
          <Link to="/login" className="text-pink-500 font-medium">
            Back to Login
          </Link>
        </p>

      </div>

    </div>

  );

}

export default ResetPassword;
