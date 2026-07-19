import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
import PopularHomestays from "../components/PopularHomestays";

function GuestDashboard() {

  const { dbUser } = useAuth();
  const [keyword, setKeyword] = useState("");

  return (

    <div className="bg-white min-h-screen">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8 text-center">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Welcome back, {dbUser?.name?.split(" ")[0] || "there"}
        </h1>

        <p className="text-gray-500 mt-3">
          Find a homestay and share your experience — your review helps owners improve.
        </p>

      </div>

      <SearchSection onSearch={setKeyword} />

      <PopularHomestays keyword={keyword} />

      <Footer />

    </div>

  );
}

export default GuestDashboard;
