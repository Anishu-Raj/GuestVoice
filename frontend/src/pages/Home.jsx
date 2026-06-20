import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-white text-black"
      }
    >
      <Navbar darkMode={darkMode} />

      <div className="flex justify-start px-6 pt-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <Hero darkMode={darkMode} />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            darkMode={darkMode}
            title="Sentiment Analysis"
            description="Identify whether reviews express positive, negative, or neutral sentiments."
          />

          <Card
            darkMode={darkMode}
            title="Aspect-Based Insights"
            description="Discover guest opinions about cleanliness, hospitality, food, and location."
          />
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Home;