import {
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
} from "lucide-react";

function AISummaryCard({ loved, mentioned, recommendation, hasData }) {

  const demoLoved = ["Clean Rooms", "Friendly Staff", "Peaceful Location", "Scenic Mountain View"];
  const demoMentioned = ["Slow Wi-Fi", "Breakfast Variety", "Parking Space"];
  const demoRecommendation =
    "Improve your breakfast menu and upgrade Wi-Fi speed to increase guest satisfaction and improve your overall ratings.";

  const lovedList = hasData ? loved : demoLoved;
  const mentionedList = hasData ? mentioned : demoMentioned;
  const recommendationText = hasData
    ? recommendation || "No specific issues flagged yet — keep up the good work."
    : demoRecommendation;

  return (
    <div className=" bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

      {/* Heading */}

      <div className="flex items-center gap-3">

        <div className="bg-pink-100 p-3 rounded-2xl">

          <Sparkles className="text-pink-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            AI Guest Summary
          </h2>

          <p className="text-gray-500">
            Generated from your latest guest reviews
          </p>

        </div>

      </div>

      {hasData && lovedList.length === 0 && mentionedList.length === 0 ? (

        <p className="text-gray-400 text-center py-10">
          No reviews yet — this summary fills in once guests start writing reviews.
        </p>

      ) : (

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {/* Love */}

        <div className="bg-green-50 rounded-3xl p-6">

          <div className="flex items-center gap-2 mb-4">

            <ThumbsUp className="text-green-600" />

            <h3 className="font-bold text-green-700">
              Guests Loved
            </h3>

          </div>

          {lovedList.length > 0 ? (

            <ul className="space-y-3 text-gray-700">
              {lovedList.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>

          ) : (

            <p className="text-gray-400 text-sm">Not enough positive reviews yet.</p>

          )}

        </div>

        {/* Dislike */}

        <div className="bg-red-50 rounded-3xl p-6">

          <div className="flex items-center gap-2 mb-4">

            <ThumbsDown className="text-red-600" />

            <h3 className="font-bold text-red-700">
              Guests Mentioned
            </h3>

          </div>

          {mentionedList.length > 0 ? (

            <ul className="space-y-3 text-gray-700">
              {mentionedList.map((item) => (
                <li key={item}>❌ {item}</li>
              ))}
            </ul>

          ) : (

            <p className="text-gray-400 text-sm">No recurring complaints yet.</p>

          )}

        </div>

        {/* Recommendation */}

        <div className="bg-yellow-50 rounded-3xl p-6">

          <div className="flex items-center gap-2 mb-4">

            <Lightbulb className="text-yellow-600" />

            <h3 className="font-bold text-yellow-700">
              AI Recommendation
            </h3>

          </div>

          <p className="leading-7 text-gray-700">
            {recommendationText}
          </p>

        </div>

      </div>

      )}

    </div>
  );
}

export default AISummaryCard;
