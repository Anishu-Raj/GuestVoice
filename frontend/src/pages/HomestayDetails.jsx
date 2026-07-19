import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import ReviewStats from "../components/ReviewStats";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function HomestayDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { dbUser, isLoggedIn } = useAuth();

  const [homestay, setHomestay] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    rating: 5,
    review: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("All");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchHomestay();
    fetchReviews();
  }, [id]);

  const fetchHomestay = async () => {
    try {

      const { data } = await API.get("/homestays");

      const selected = data.find((item) => item._id === id);

      setHomestay(selected);

    } catch (err) {
      console.log(err);
    }
  };

  const fetchReviews = async () => {
    try {

      const { data } = await API.get(`/reviews/homestay/${id}`);

      setReviews(data);

    } catch (err) {

      console.log(err);
    }
  };

  const editReview = (review) => {

    setEditingId(review._id);

    setFormData({
      rating: review.rating,
      review: review.review,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  const deleteReview = async (reviewId) => {

    const confirmDelete = window.confirm("Delete this review?");

    if (!confirmDelete) return;

    try {

      await API.delete(`/reviews/${reviewId}`);

      toast.success("Review deleted");
      fetchReviews();

    } catch (err) {

      console.log(err);
      toast.error("Failed to delete review");

    }

  };

  const submitReview = async (e) => {

    e.preventDefault();

    if (!isLoggedIn) {
      toast.error("Please login to leave a review");
      navigate("/login");
      return;
    }

    setSubmitting(true);

    try {

      if (editingId) {

        await API.put(`/reviews/${editingId}`, {
          rating: formData.rating,
          review: formData.review,
        });

        toast.success("Review updated successfully");
        setEditingId(null);

      } else {

        // AI analysis (sentiment, topics, recommendation) happens on the
        // backend via Gemini — this call is what triggers it.
        await API.post("/reviews", {
          homestayId: id,
          userId: dbUser._id,
          rating: formData.rating,
          review: formData.review,
        });

        toast.success("Review submitted — AI analysis complete");

      }


      fetchReviews();
      fetchHomestay();

    } catch (err) {

      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong");

    } finally {

      setSubmitting(false);

    }

  };

  const filteredReviews =
    filter === "All"
      ? reviews
      : reviews.filter((review) => review.sentiment === filter);

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
                {homestay.name}
              </h1>

              <p className="text-gray-500 mt-3">
                {homestay.city}{homestay.state ? `, ${homestay.state}` : ""}
              </p>

            </div>

            <div className="text-right">

              <p className="text-yellow-500 text-3xl">
                ⭐ {homestay.averageRating?.toFixed(1) || "New"}
              </p>

              <p className="text-gray-500">
                {homestay.totalReviews || 0} Reviews
              </p>

            </div>

          </div>

          {homestay.propertyType && (
            <div className="mt-8 flex gap-4">
              <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
                {homestay.propertyType}
              </span>
            </div>
          )}

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

          <div className="flex gap-4 mb-8 flex-wrap">

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

          <ReviewList
            reviews={filteredReviews}
            onEdit={editReview}
            onDelete={deleteReview}
          />

        </div>

        <ReviewForm
          formData={formData}
          setFormData={setFormData}
          submitReview={submitReview}
          editingId={editingId}
          submitting={submitting}
        />

      </div>

    </div>

  );

}

export default HomestayDetails;
