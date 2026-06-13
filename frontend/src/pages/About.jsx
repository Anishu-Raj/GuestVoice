import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">
          About GuestVoice
        </h1>

        <p className="text-gray-600">
          GuestVoice is an AI-assisted platform designed to help homestay owners better understand guest experiences more effectively by analyzing customer reviews and extracting meaningful insights from them.

        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;