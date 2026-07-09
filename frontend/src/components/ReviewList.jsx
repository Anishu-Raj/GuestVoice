import ReviewCard from "./ReviewCard";

function ReviewList({ reviews, onEdit, onDelete }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-gray-600">
          No reviews found.
        </h2>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard
          key={review._id}
          review={review}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ReviewList;