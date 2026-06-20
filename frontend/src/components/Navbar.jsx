import { Link } from "react-router-dom";

function Navbar({ darkMode }) {
  return (
    <nav
      className={`flex flex-col md:flex-row justify-between items-center px-8 py-4 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-2xl font-bold text-blue-400">
        GuestVoice
      </h1>

      <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-4 md:mt-0">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>

        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>

        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/login" className="hover:text-blue-400">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;