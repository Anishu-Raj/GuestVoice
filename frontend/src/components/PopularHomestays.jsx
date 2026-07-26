import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { Home } from "lucide-react";

function PopularHomestays({ keyword }) {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    if (keyword === "") {
      fetchHomestays();
    } else {
      searchHomestays();
    }

  }, [keyword]);

  const fetchHomestays = async () => {

    setLoading(true);
    setError("");

    try {

      const { data } = await API.get("/homestays");
      setHomestays(data);

    } catch (err) {

      console.log(err);
      setError("Couldn't load homestays right now.");

    } finally {

      setLoading(false);

    }

  };

  const searchHomestays = async () => {

    setLoading(true);
    setError("");

    try {

      const { data } = await API.get(`/homestays/search?name=${keyword}`);
      setHomestays(data);

    } catch (err) {

      console.log(err);
      setError("Search failed. Try again.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl sm:text-5xl font-bold text-center text-slate-800">
          Popular Homestays
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Select your homestay to view guest reviews and AI insights.
        </p>

        {loading ? (

          <div className="flex justify-center py-20">
            <span className="w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin" />
          </div>

        ) : error ? (

          <p className="text-center text-red-500 mt-16">{error}</p>

        ) : homestays.length === 0 ? (

          <div className="flex flex-col items-center py-20 text-center">
            <Home className="text-gray-300" size={48} />
            <p className="text-gray-400 mt-4">
              {keyword
                ? `No homestays found for "${keyword}".`
                : "No homestays listed yet."}
            </p>
          </div>

        ) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">

          {homestays.map((item) => (

            <div
              key={item._id}
              className="bg-mist-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-pine-950/5"
            >

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-slate-800">
                  {item.name}
                </h2>

                <span className="text-2xl">
                  🏡
                </span>

              </div>

              <p className="mt-4 text-gray-600">
                📍 {item.city}{item.state ? `, ${item.state}` : ""}
              </p>

              <p className="mt-2">
                ⭐ {item.averageRating ? item.averageRating.toFixed(1) : "New"}
              </p>

              <p className="mt-2">
                💬 {item.totalReviews || 0} Reviews
              </p>

              {item.propertyType && (
                <p className="mt-2">
                  🏷 {item.propertyType}
                </p>
              )}

              <button
                onClick={() => navigate(`/homestay/${item._id}`)}
                className="mt-8 w-full bg-pine-950 text-white py-3 rounded-xl hover:bg-pine-800 transition"
              >
                View Details
              </button>

            </div>

          ))}

        </div>

        )}

      </div>
    </section>
  );
}

export default PopularHomestays;
