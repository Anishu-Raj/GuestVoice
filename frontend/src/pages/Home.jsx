import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
import PopularHomestays from "../components/PopularHomestays";

function Home() {

  const [keyword, setKeyword] = useState("");

  return (

    <div className="bg-white min-h-screen">

      <Navbar />

      <Hero />

      <SearchSection onSearch={setKeyword} />

      <PopularHomestays keyword={keyword} />

      <Footer />

    </div>

  );
}

export default Home;