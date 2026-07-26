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
    <section id="homestays" className="bg-mist-100 py-16 scroll-mt-20">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl sm:text-4xl font-bold text-pine-950">

          Search Your Homestay

        </h2>

        <p className="text-gray-600 mt-4">

          Search your homestay and instantly view guest reviews.

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >

          <div className="relative w-full sm:w-[350px]">

            <Search
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Enter Homestay Name..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-xl border border-pine-800/20 focus:outline-none focus:ring-2 focus:ring-ember-400"
            />

          </div>

          <button
            type="submit"
            className="bg-pine-950 text-white px-8 py-4 sm:py-0 rounded-xl hover:bg-pine-800 transition"
          >

            Search

          </button>

        </form>

      </div>

    </section>
  );
}

export default SearchSection;
