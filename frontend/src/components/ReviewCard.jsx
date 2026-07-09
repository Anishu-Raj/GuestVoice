function ReviewCard({ review, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {review.guestName}
          </h2>

          <p className="text-yellow-500 text-lg mt-1">
            {"⭐".repeat(review.rating)}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
          ${
            review.sentiment === "Positive"
              ? "bg-green-100 text-green-700"
              : review.sentiment === "Negative"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {review.sentiment}
        </span>
      </div>

      {/* Review */}
      <p className="text-gray-600 mt-5 leading-7">
        {review.review}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => onEdit(review)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-lg transition"
        >
          ✏ Edit
        </button>

        <button
          onClick={() => onDelete(review._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;