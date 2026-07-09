import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user, logout, isLoggedIn } = useAuth();

  return (

    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">

            G

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">

              GuestVoice

            </h1>

            <p className="text-xs text-gray-400">

              Because Every Review Matters

            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">

          <Link
            to="/"
            className="hover:text-sky-400 transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-sky-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className="hover:text-sky-400 transition"
          >
            About
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {

            isLoggedIn ? (

              <>

                <span className="text-white font-medium">

                  Hi, {user.name}

                </span>

                <button

                  onClick={logout}

                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white transition"

                >

                  Logout

                </button>

              </>

            ) : (

              <Link to="/login">

                <button className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-xl">

                  Login

                </button>

              </Link>

            )

          }

          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition px-6 py-3 rounded-xl text-white font-semibold shadow-xl">

            Explore Platform

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </motion.nav>

  );

}

export default Navbar;