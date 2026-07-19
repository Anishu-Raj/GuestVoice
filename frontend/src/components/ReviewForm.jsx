import { useState, useEffect } from "react";

function ReviewForm({
  formData,
  setFormData,
  submitReview,
  editingId,
  submitting,
}) {
  return (
    <div className="mt-14 bg-white rounded-3xl shadow-xl p-10">

      <h2 className="text-3xl font-bold text-pink-600 mb-8">

        {editingId ? "Update Review" : "Add Your Review"}

      </h2>

      <form
        onSubmit={submitReview}
        className="space-y-6"
      >

        {/* Rating */}

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Rating
          </label>

          <select
            value={formData.rating}
            onChange={(e) =>
              setFormData({
                ...formData,
                rating: Number(e.target.value),
              })
            }
            className="w-full border border-pink-200 rounded-xl p-4 focus:ring-2 focus:ring-pink-400 outline-none"
          >

            <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
            <option value={4}>⭐⭐⭐⭐ Very Good</option>
            <option value={3}>⭐⭐⭐ Good</option>
            <option value={2}>⭐⭐ Fair</option>
            <option value={1}>⭐ Poor</option>

          </select>

        </div>

        {/* Review */}

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Review
          </label>

          <textarea
            rows="5"
            required
            placeholder="Share your experience..."
            value={formData.review}
            onChange={(e) =>
              setFormData({
                ...formData,
                review: e.target.value,
              })
            }
            className="w-full border border-pink-200 rounded-xl p-4 resize-none focus:ring-2 focus:ring-pink-400 outline-none"
          />

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <button
            type="submit"
            disabled={submitting}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition disabled:opacity-60 disabled:hover:scale-100 flex items-center gap-3"
          >

            {submitting && (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            )}

            {submitting
              ? "Analyzing with AI..."
              : editingId
              ? "Update Review"
              : "Submit Review"}

          </button>

          {editingId && (

            <button
              type="button"
              onClick={() =>
                setFormData({
                  guestName: "",
                  rating: 5,
                  review: "",
                })
              }
              className="bg-gray-300 px-8 py-4 rounded-xl hover:bg-gray-400 transition"
            >

              Cancel

            </button>

          )}

        </div>

      </form>

    </div>
  );
}

export default ReviewForm;