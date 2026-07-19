import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { dbUser, logout, isLoggedIn } = useAuth();

  return (

    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-100 shadow-sm"
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">

            G

          </div>

          <div>

            <h1 className="text-2xl font-bold text-gray-900">

              GuestVoice

            </h1>

            <p className="text-xs text-gray-400">

              Because Every Review Matters

            </p>

          </div>

        </Link>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">

          <Link
            to="/"
            className="hover:text-sky-500 transition"
          >
            Home
          </Link>

          {isLoggedIn && (

            <Link
              to="/redirect"
              className="hover:text-sky-500 transition"
            >
              Dashboard
            </Link>

          )}

          <Link
            to="/about"
            className="hover:text-sky-500 transition"
          >
            About
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {

            isLoggedIn ? (

              <>

                <span className="text-gray-700 font-medium hidden sm:block">

                  Hi, {dbUser?.name || "there"}
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

                <button className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-md">

                  Login

                </button>

              </Link>

            )

          }

        </div>

      </div>

    </motion.nav>

  );

}

export default Navbar;