import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomestayDetails() {

  const { id } = useParams();

  const [homestay, setHomestay] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchHomestay();
    fetchReviews();
  }, []);

  const fetchHomestay = async () => {
    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/homestays"
      );

      const selected = data.find((item) => item._id === id);

      setHomestay(selected);

    } catch (err) {
      console.log(err);
    }
  };

  const fetchReviews = async () => {
    try {

      const { data } = await axios.get(
        `http://localhost:5000/api/reviews/homestay/${id}`
      );

      setReviews(data);

    } catch (err) {

      console.log(err);

    }
  };
     const positiveReviews = reviews.filter(
  (review) => review.sentiment === "Positive"
);

const neutralReviews = reviews.filter(
  (review) => review.sentiment === "Neutral"
);

const negativeReviews = reviews.filter(
  (review) => review.sentiment === "Negative"
);

const filteredReviews =
  filter === "All"
    ? reviews
    : reviews.filter((review) => review.sentiment === filter);

const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length
      ).toFixed(1)
    : 0;
  if (!homestay) {

    return (

      <div className="min-h-screen flex justify-center items-center text-2xl">

        Loading...

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-12">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-5xl font-bold text-gray-800">

                🏡 {homestay.name}

              </h1>

              <p className="text-gray-500 mt-3">

                📍 {homestay.location}

              </p>

            </div>

            <div className="text-right">

              <p className="text-yellow-500 text-3xl">

                ⭐ {homestay.averageRating}

              </p>

              <p className="text-gray-500">

                {homestay.totalReviews} Reviews

              </p>

            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">

              {homestay.category}

            </span>

          </div>

          <p className="mt-8 text-gray-700 leading-8">

            {homestay.description}

          </p>

        </div>
         <div className="grid md:grid-cols-5 gap-5 mt-10">

  <div className="bg-green-100 rounded-2xl p-6 text-center">
    <h2 className="text-3xl">😊</h2>
    <p className="font-bold mt-2">
      {positiveReviews.length}
    </p>
    <p>Positive</p>
  </div>

  <div className="bg-yellow-100 rounded-2xl p-6 text-center">
    <h2 className="text-3xl">😐</h2>
    <p className="font-bold mt-2">
      {neutralReviews.length}
    </p>
    <p>Neutral</p>
  </div>

  <div className="bg-red-100 rounded-2xl p-6 text-center">
    <h2 className="text-3xl">😞</h2>
    <p className="font-bold mt-2">
      {negativeReviews.length}
    </p>
    <p>Negative</p>
  </div>

  <div className="bg-pink-100 rounded-2xl p-6 text-center">
    <h2 className="text-3xl">⭐</h2>
    <p className="font-bold mt-2">
      {averageRating}
    </p>
    <p>Average</p>
  </div>

  <div className="bg-purple-100 rounded-2xl p-6 text-center">
    <h2 className="text-3xl">💬</h2>
    <p className="font-bold mt-2">
      {reviews.length}
    </p>
    <p>Total Reviews</p>
  </div>

</div>
        {/* Reviews */}

        <div className="mt-12">

          <h2 className="text-4xl font-bold text-gray-800 mb-8">

            Guest Reviews

          </h2>

          <div className="space-y-6">

            {reviews.length === 0 ? (

              <div className="bg-white rounded-2xl p-8 shadow">

                <p className="text-gray-500">

                  No Reviews Found.

                </p>

              </div>

            ) : (

              filteredReviews.map((review) => (

                <div
                  key={review._id}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >

                  <div className="flex justify-between">

                    <h3 className="font-bold text-xl">

                      {review.guestName}

                    </h3>

                    <span className="text-yellow-500">

                      ⭐ {review.rating}

                    </span>

                  </div>

                  <p className="mt-5 text-gray-700 leading-7">

                    {review.review}

                  </p>

                  <div className="mt-5">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                      {review.sentiment}

                    </span>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>
          <div className="flex gap-4 my-8 flex-wrap">

  {["All", "Positive", "Neutral", "Negative"].map((item) => (

    <button
      key={item}
      onClick={() => setFilter(item)}
      className={`px-5 py-2 rounded-full transition font-medium ${
        filter === item
          ? "bg-pink-500 text-white"
          : "bg-white border"
      }`}
    >
      {item}
    </button>

  ))}

</div>
        {/* AI */}

        <div className="mt-14 bg-white rounded-3xl shadow-xl p-10 text-center">

          <h2 className="text-3xl font-bold text-gray-800">

            AI Review Analysis

          </h2>

          <p className="text-gray-500 mt-4">

            Analyze all guest reviews using AI to identify major
            strengths, common complaints and improvement suggestions.

          </p>

          <button
            className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition"
          >

            Analyze Reviews

          </button>

        </div>

      </div>

    </div>

  );

}

export default HomestayDetails;