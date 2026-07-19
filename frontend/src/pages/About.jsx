import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MessageSquare, Brain, TrendingUp } from "lucide-react";

function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About GuestVoice
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Homestay owners get dozens of reviews but rarely have time to read
          all of them closely. GuestVoice reads every review for you, figures
          out what guests actually felt, and turns that into a simple
          dashboard you can check in a minute — sentiment trends, common
          topics, and specific things worth fixing.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">

          <div className="border border-gray-100 rounded-2xl p-6">
            <MessageSquare className="text-sky-500 mb-3" size={28} />
            <h3 className="font-semibold text-gray-900 mb-1">Collect reviews</h3>
            <p className="text-gray-500 text-sm">
              Guests leave a rating and a review after their stay, from a link
              you share.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6">
            <Brain className="text-sky-500 mb-3" size={28} />
            <h3 className="font-semibold text-gray-900 mb-1">AI reads them</h3>
            <p className="text-gray-500 text-sm">
              Each review is analyzed for sentiment and the specific topics
              guests mention.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6">
            <TrendingUp className="text-sky-500 mb-3" size={28} />
            <h3 className="font-semibold text-gray-900 mb-1">You take action</h3>
            <p className="text-gray-500 text-sm">
              Your dashboard shows what's working and what needs attention,
              at a glance.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default About;
