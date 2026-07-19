import { useState } from "react";
import { Star, Sparkles } from "lucide-react";
import API from "../../services/api";

function RecentReviews({ reviews: reviewsProp }) {

  const demoReviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Amazing stay! Rooms were clean and the staff was very friendly.",
      time: "2 hours ago",
    },

    {
      id: 2,
      name: "Priya Singh",
      rating: 4,
      review:
        "Beautiful location but Wi-Fi speed could be improved.",
      time: "Yesterday",
    },

    {
      id: 3,
      name: "Aman Verma",
      rating: 5,
      review:
        "Food was delicious and the mountain view was breathtaking.",
      time: "2 days ago",
    },
  ];

  const isRealData = reviewsProp && reviewsProp.length > 0;

  // Backend sends populated Review documents (userId -> {name, photo}),
  // so normalize into the {id, name, rating, review, time} shape this UI uses.
  const reviews = isRealData
    ? reviewsProp.map((r) => ({
        id: r._id,
        name: r.userId?.name || "Guest",
        rating: r.rating,
        review: r.review,
        time: new Date(r.createdAt).toLocaleDateString(),
        ownerReply: r.ownerReply || "",
      }))
    : demoReviews;

  const [replies, setReplies] = useState({});
  const [generatingId, setGeneratingId] = useState(null);
  const [errorId, setErrorId] = useState(null);

  const generateReply = async (reviewId) => {

    setGeneratingId(reviewId);
    setErrorId(null);

    try {

      const { data } = await API.post(`/ai/reply/${reviewId}`);

      setReplies((prev) => ({ ...prev, [reviewId]: data.reply }));

    } catch (err) {

      console.log(err);
      setErrorId(reviewId);

    } finally {

      setGeneratingId(null);

    }

  };

  return (

    <div className="mt-8 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Recent Reviews
          </h2>

          <p className="text-gray-500 mt-1">
            Latest feedback from your guests
          </p>

        </div>

      </div>

      <div className="space-y-5 mt-8">

        {reviews.map((review) => {

          const reply = replies[review.id] || review.ownerReply;
          const isGenerating = generatingId === review.id;

          return (

            <div
              key={review.id}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="font-semibold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {review.time}
                  </p>

                </div>

                <div className="flex items-center gap-1">

                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-semibold">
                    {review.rating}
                  </span>

                </div>

              </div>

              <p className="text-gray-600 leading-7 mt-4">
                {review.review}
              </p>

              {isRealData && (

                <div className="mt-4">

                  {reply ? (

                    <div className="bg-sky-50 border border-sky-100 rounded-xl p-4">
                      <p className="text-xs font-semibold text-sky-600 mb-1">
                        Your AI-suggested reply
                      </p>
                      <p className="text-gray-700 text-sm leading-6">
                        {reply}
                      </p>
                    </div>

                  ) : (

                    <button
                      onClick={() => generateReply(review.id)}
                      disabled={isGenerating}
                      className="flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 disabled:opacity-60"
                    >

                      {isGenerating ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-sky-300 border-t-sky-600 rounded-full animate-spin" />
                          Generating reply...
                        </>
                      ) : (
                        <>
                          <Sparkles size={16} />
                          Generate AI reply
                        </>
                      )}

                    </button>

                  )}

                  {errorId === review.id && (
                    <p className="text-red-500 text-xs mt-2">
                      Couldn't generate a reply right now. Try again.
                    </p>
                  )}

                </div>

              )}

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default RecentReviews;
