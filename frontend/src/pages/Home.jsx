import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBrands from "../components/TrustedBrands";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";
import PopularHomestays from "../components/PopularHomestays";

function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <SearchSection />
      <PopularHomestays/>
      {/*<TrustedBrands />*
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Testimonials />
      <CTA />*/}
      <Footer />
    </div>
  );
}

export default Home;