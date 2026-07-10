import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

function Login() {

  const { loginWithGoogle, dbUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {

    if (!dbUser) return;

    if (!dbUser.isProfileCompleted) {

      navigate("/complete-profile");

    }

    else if (dbUser.role === "owner") {

      navigate("/dashboard");

    }

    else if (dbUser.role === "guest") {

      navigate("/guest-dashboard");

    }

    else if (dbUser.role === "admin") {

      navigate("/admin-dashboard");

    }

  }, [dbUser, navigate]);

  return (

    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-purple-100 flex items-center justify-center px-5">

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

        <button

          onClick={loginWithGoogle}

          className="mt-10 w-full flex items-center justify-center gap-4 bg-white border-2 border-gray-200 rounded-xl py-4 hover:border-blue-500 hover:shadow-lg transition"

        >

          <FcGoogle size={28} />

          <span className="font-semibold text-lg">

            Continue with Google

          </span>

        </button>

        <p className="text-center text-sm text-gray-400 mt-8">

          By continuing you agree to our Terms & Privacy Policy.

        </p>

      </div>

    </div>

  );

}

export default Login;