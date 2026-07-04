import { useState } from "react";
import { Search } from "lucide-react";

function SearchSection({ onSearch }) {

  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    onSearch(keyword);
  };

  return (
    <section className="bg-pink-50 py-16">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-pink-700">

          Search Your Homestay

        </h2>

        <p className="text-gray-600 mt-4">

          Search your homestay and instantly view guest reviews.

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >

          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Enter Homestay Name..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-[350px] pl-12 pr-5 py-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 rounded-xl hover:scale-105 transition"
          >

            Search

          </button>

        </form>

      </div>

    </section>
  );
}

export default SearchSection;