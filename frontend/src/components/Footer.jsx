function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold mb-2">
          GuestVoice
        </h2>

        <p className="text-gray-400 mb-4">
          Turning guest feedback into meaningful insights.
        </p>

        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>

          <a href="#" className="hover:text-blue-400">
            Support
          </a>
        </div>

        <p className="text-gray-500 mt-4 text-sm">
          © 2026 GuestVoice. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;