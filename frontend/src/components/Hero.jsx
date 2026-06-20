function Hero({ darkMode }) {
  return (
    <section
      className={`py-20 text-center px-6 ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-blue-50 text-black"
      }`}
    >
      <h1
        className={`text-5xl font-bold mb-6 ${
          darkMode
            ? "text-white"
            : "text-gray-800"
        }`}
      >
        Understand What Guests Really Think
      </h1>

      <p
        className={`text-lg max-w-2xl mx-auto mb-8 ${
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        <i>
          GuestVoice helps homestay owners analyze customer reviews,
          discover improvement areas, and enhance guest satisfaction
          using AI-powered insights.
        </i>
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Explore Insights
      </button>
    </section>
  );
}

export default Hero;