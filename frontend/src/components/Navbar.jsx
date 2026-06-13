import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-4 bg-gray-900">

  <h1 className="text-2xl font-bold text-blue-600">
    GuestVoice
  </h1>

  <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-white mt-4 md:mt-0">
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