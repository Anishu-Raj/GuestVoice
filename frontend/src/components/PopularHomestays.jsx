import { useEffect, useState } from "react";
import axios from "axios";

function PopularHomestays() {

  const [homestays, setHomestays] = useState([]);

  useEffect(() => {

    fetchHomestays();

  }, []);

  const fetchHomestays = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/homestays"
      );

      setHomestays(data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-800">

          Popular Homestays

        </h2>

        <p className="text-center text-gray-500 mt-4">

          Select your homestay to view guest reviews and AI insights.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {homestays.map((item) => (

            <div
              key={item._id}
              className="bg-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-pink-100"
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

                📍 {item.location}

              </p>

              <p className="mt-2">

                ⭐ {item.averageRating}

              </p>

              <p className="mt-2">

                💬 {item.totalReviews} Reviews

              </p>

              <p className="mt-2">

                🏷 {item.category}

              </p>

              <button className="mt-8 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl hover:scale-105 transition">

                View Details

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default PopularHomestays;