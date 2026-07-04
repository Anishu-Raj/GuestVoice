function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-200">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-pink-600">
            GuestVoice
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            Helping homestay owners understand guest feedback through
            AI-powered review analysis.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Platform
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>Dashboard</li>
            <li>Search Homestays</li>
            <li>Analytics</li>
            <li>AI Insights</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Contact
          </h3>

          <p className="text-gray-600">
            📧 support@guestvoice.ai
          </p>

          <p className="text-gray-600 mt-2">
            📍 Dehradun, Uttarakhand
          </p>

          <p className="text-gray-600 mt-2">
            ☎ +91 XXXXX XXXXX
          </p>

          <div className="flex gap-3 mt-6">

            <button className="w-10 h-10 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
              🌐
            </button>

            <button className="w-10 h-10 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
              📸
            </button>

            <button className="w-10 h-10 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
              💼
            </button>

          </div>
        </div>

      </div>

      <div className="border-t border-pink-200 py-6">

        <p className="text-center text-gray-600">
          © 2026 <span className="font-semibold text-pink-600">GuestVoice</span>
          {" "}• Because Every Review Matters.
        </p>

      </div>

    </footer>
  );
}

export default Footer;