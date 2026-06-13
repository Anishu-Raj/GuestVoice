import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Sentiment Analysis"
            description="Identify whether reviews express positive, negative, or neutral sentiments."
          />

          <Card
            title="Aspect-Based Insights"
            description="Discover guest opinions about cleanliness, hospitality, food, and location."
          />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;