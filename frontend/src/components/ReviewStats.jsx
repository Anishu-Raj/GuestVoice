function ReviewStats({ reviews }) {
  const positiveReviews = reviews.filter(
    (review) => review.sentiment === "Positive"
  );

  const neutralReviews = reviews.filter(
    (review) => review.sentiment === "Neutral"
  );

  const negativeReviews = reviews.filter(
    (review) => review.sentiment === "Negative"
  );

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="grid md:grid-cols-5 gap-5 mt-10">

      {/* Positive */}

      <div className="bg-green-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">

        <div className="text-4xl">😊</div>

        <h2 className="text-3xl font-bold mt-3 text-green-700">
          {positiveReviews.length}
        </h2>

        <p className="text-gray-700 mt-2">
          Positive Reviews
        </p>

      </div>

      {/* Neutral */}

      <div className="bg-yellow-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">

        <div className="text-4xl">😐</div>

        <h2 className="text-3xl font-bold mt-3 text-yellow-700">
          {neutralReviews.length}
        </h2>

        <p className="text-gray-700 mt-2">
          Neutral Reviews
        </p>

      </div>

      {/* Negative */}

      <div className="bg-red-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">

        <div className="text-4xl">😞</div>

        <h2 className="text-3xl font-bold mt-3 text-red-700">
          {negativeReviews.length}
        </h2>

        <p className="text-gray-700 mt-2">
          Negative Reviews
        </p>

      </div>

      {/* Average */}

      <div className="bg-pink-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">

        <div className="text-4xl">⭐</div>

        <h2 className="text-3xl font-bold mt-3 text-pink-700">
          {averageRating}
        </h2>

        <p className="text-gray-700 mt-2">
          Average Rating
        </p>

      </div>

      {/* Total */}

      <div className="bg-purple-100 rounded-2xl p-6 shadow hover:shadow-lg transition text-center">

        <div className="text-4xl">💬</div>

        <h2 className="text-3xl font-bold mt-3 text-purple-700">
          {reviews.length}
        </h2>

        <p className="text-gray-700 mt-2">
          Total Reviews
        </p>

      </div>

    </div>
  );
}

export default ReviewStats;