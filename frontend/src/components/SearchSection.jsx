import { Search, MapPin } from "lucide-react";

function SearchSection() {
  return (
    <section className="bg-pink-50 py-20">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-pink-500 font-semibold">
          Find Your Property
        </p>

        <h2 className="text-5xl font-bold text-slate-800 mt-4">
          Search Your Homestay
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          Search your registered homestay to manage reviews,
          monitor guest satisfaction, and unlock AI-powered insights.
        </p>

        <div className="mt-12 bg-white rounded-2xl shadow-xl p-3 flex flex-col md:flex-row gap-3">

          <div className="flex items-center flex-1 px-4">

            <MapPin className="text-pink-500" />

            <input
              type="text"
              placeholder="Search by homestay name..."
              className="w-full outline-none px-4 py-4 text-gray-700"
            />

          </div>

          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition text-white px-8 py-4 rounded-xl">

            <Search size={20} />

            Search

          </button>

        </div>

      </div>

    </section>
  );
}

export default SearchSection;