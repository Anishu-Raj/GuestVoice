import { useEffect, useState } from "react";
import API from "../services/api";

function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      setLoading(true);

      const response = await API.get("/reviews");

      setReviews(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to load reviews.");
    } finally {
      setLoading(false);
    }
  };

  // Delete review
  const deleteReview = async (id) => {
    try {
      await API.delete(`/reviews/${id}`);

      // Refresh reviews
      fetchReviews();
    } catch (err) {
      console.error(err);
      alert("Failed to delete review.");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    loading,
    error,
    fetchReviews,
    deleteReview,
  };
}

export default useReviews;