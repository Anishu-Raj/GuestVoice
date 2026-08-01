function Footer() {
  return (
    <footer className="bg-blush-100 border-t border-rose-950/10">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-rose-950">
            GuestVoice
          </h2>

          <p className="mt-4 leading-7" style={{color:"#8b6b72"}}>
            Helping homestay owners understand guest feedback through
            AI-powered review analysis.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-semibold text-lg text-rose-950 mb-4">
            Platform
          </h3>

          <ul className="space-y-3" style={{color:"#8b6b72"}}>
            <li>Dashboard</li>
            <li>Search Homestays</li>
            <li>Analytics</li>
            <li>AI Insights</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg text-rose-950 mb-4">
            Company
          </h3>

          <ul className="space-y-3" style={{color:"#8b6b72"}}>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg text-rose-950 mb-4">
            Contact
          </h3>

          <p style={{color:"#8b6b72"}}>
            📧 support@guestvoice.ai
          </p>

          <p className="mt-2" style={{color:"#8b6b72"}}>
            📍 Dehradun, Uttarakhand
          </p>

          <p className="mt-2" style={{color:"#8b6b72"}}>
            ☎ +91 XXXXX XXXXX
          </p>

          <div className="flex gap-3 mt-6">

            <button className="w-10 h-10 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition">
              🌐
            </button>

            <button className="w-10 h-10 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition">
              📸
            </button>

            <button className="w-10 h-10 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition">
              💼
            </button>

          </div>
        </div>

      </div>

      <div className="border-t border-rose-950/10 py-6">

        <p className="text-center" style={{color:"#8b6b72"}}>
          © 2026 <span className="font-semibold text-rose-600">GuestVoice</span>
          {" "}• Because Every Review Matters.
        </p>

      </div>

    </footer>
  );
}

export default Footer;