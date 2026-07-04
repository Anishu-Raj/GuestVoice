import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function HomestayDetails() {

  const { id } = useParams();

  const [homestay, setHomestay] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
  guestName: "",
  rating: 5,
  review: "",
});
const [editingId, setEditingId] = useState(null);
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
  const editReview = (review) => {

  setEditingId(review._id);

  setFormData({

    guestName: review.guestName,

    rating: review.rating,

    review: review.review,

  });

  window.scrollTo({

    top: 0,

    behavior: "smooth",

  });

};
const deleteReview = async (id) => {

  const confirmDelete = window.confirm(

    "Delete this review?"

  );

  if (!confirmDelete) return;

  try {

    await axios.delete(

      `http://localhost:5000/api/reviews/${id}`

    );

    toast.success("Review Deleted");

    fetchReviews();

  }

  catch (err) {

    console.log(err);

  }

};
const submitReview = async (e) => {
  e.preventDefault();

  try {

    if (editingId) {

      await axios.put(

        `http://localhost:5000/api/reviews/${editingId}`,

        {
          ...formData,
        }

      );

      toast.success("Review Updated Successfully 🎉");

      setEditingId(null);

    }

    else {

      await axios.post(
        "http://localhost:5000/api/reviews",
        {
          ...formData,
          homestay: id,
          sentiment: "Positive",
        }
      );

      toast.success("Review Added Successfully 🎉");

    }

    setFormData({
      guestName: "",
      rating: 5,
      review: "",
    });

    fetchReviews();

  }

  catch (err) {

    console.log(err);

    toast.error("Something went wrong");

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
  const overallSentiment =
  positiveReviews.length >= neutralReviews.length &&
  positiveReviews.length >= negativeReviews.length
    ? "Positive"
    : neutralReviews.length >= negativeReviews.length
    ? "Neutral"
    : "Negative";

const strengths = [
  "Friendly Staff",
  "Clean Rooms",
  "Beautiful Location",
];

const improvements = [
  "WiFi",
  "Parking",
  "Breakfast",
];
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
                  <div className="flex gap-4 mt-6">

                    <button

                      onClick={() => editReview(review)}

                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-xl"

                      >

                          ✏ Edit

                    </button>

                  <button

                        onClick={() => deleteReview(review._id)}

                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"

                        >

                      🗑 Delete

                  </button>

                  </div>

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
<div className="mt-14 bg-white rounded-3xl shadow-xl p-10">

  <h2 className="text-3xl font-bold text-pink-600">

{

editingId

?

"Update Review"

:

"Add Your Review"

}

</h2>
  <form
    onSubmit={submitReview}
    className="space-y-6 mt-8"
  >

    <input
      type="text"
      placeholder="Guest Name"
      required
      value={formData.guestName}
      onChange={(e) =>
        setFormData({
          ...formData,
          guestName: e.target.value,
        })
      }
      className="w-full border rounded-xl p-4"
    />

    <select
      value={formData.rating}
      onChange={(e) =>
        setFormData({
          ...formData,
          rating: Number(e.target.value),
        })
      }
      className="w-full border rounded-xl p-4"
    >

      <option value={5}>⭐⭐⭐⭐⭐</option>
      <option value={4}>⭐⭐⭐⭐</option>
      <option value={3}>⭐⭐⭐</option>
      <option value={2}>⭐⭐</option>
      <option value={1}>⭐</option>

    </select>

    <textarea
      rows="5"
      placeholder="Write your review..."
      required
      value={formData.review}
      onChange={(e) =>
        setFormData({
          ...formData,
          review: e.target.value,
        })
      }
      className="w-full border rounded-xl p-4"
    />

    <button
      type="submit"
      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition"
    >

      {

editingId

?

"Update Review"

:

"Submit Review"

}

    </button>

  </form>

</div>
        {/* AI */}

        <div className="mt-14 bg-white rounded-3xl shadow-xl p-10">

  <h2 className="text-3xl font-bold text-pink-600 text-center">

    🤖 AI Review Analysis

  </h2>

  <div className="grid md:grid-cols-2 gap-10 mt-10">

    <div>

      <h3 className="text-xl font-bold mb-4">

        Overall Sentiment

      </h3>

      <span
        className={`px-5 py-2 rounded-full font-semibold ${
          overallSentiment === "Positive"
            ? "bg-green-100 text-green-700"
            : overallSentiment === "Neutral"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {overallSentiment}
      </span>

      <div className="mt-8">

        <h3 className="font-bold">

          Average Rating

        </h3>

        <p className="text-3xl mt-2">

          ⭐ {averageRating}/5

        </p>

      </div>

    </div>

    <div>

      <h3 className="font-bold text-green-600">

        ✔ Strengths

      </h3>

      <ul className="mt-3 space-y-2">

        {strengths.map((item) => (

          <li key={item}>• {item}</li>

        ))}

      </ul>

      <h3 className="font-bold text-red-600 mt-8">

        ❌ Needs Improvement

      </h3>

      <ul className="mt-3 space-y-2">

        {improvements.map((item) => (

          <li key={item}>• {item}</li>

        ))}

      </ul>

    </div>

  </div>

  <div className="mt-10 bg-pink-50 rounded-2xl p-6">

    <h3 className="font-bold text-pink-600">

      AI Recommendation

    </h3>

    <p className="mt-3 text-gray-700 leading-7">

      Guests are generally satisfied with this homestay.
      Improving WiFi connectivity, parking availability,
      and breakfast quality can further improve guest
      satisfaction and increase future ratings.

    </p>

  </div>

</div>

      </div>

    </div>

  );

}

export default HomestayDetails;