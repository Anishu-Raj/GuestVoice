import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        GuestVoice
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>

        <Link to="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>

        <Link to="/login" className="hover:text-blue-600">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;