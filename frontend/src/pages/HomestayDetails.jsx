import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ReviewStats from "../components/ReviewStats";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
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
        <ReviewStats reviews={reviews} />
        {/* Reviews */}

        <div className="mt-12">

          <h2 className="text-4xl font-bold text-gray-800 mb-8">

            Guest Reviews

          </h2>

          <ReviewList
  reviews={filteredReviews}
  editReview={editReview}
  deleteReview={deleteReview}
/>

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

        <ReviewForm
  formData={formData}
  setFormData={setFormData}
  submitReview={submitReview}
  editingId={editingId}
/>
      </div>

    </div>

  );

}

export default HomestayDetails;