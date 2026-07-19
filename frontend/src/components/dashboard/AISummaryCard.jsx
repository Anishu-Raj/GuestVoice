import {
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
} from "lucide-react";

function AISummaryCard() {
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

      {/* Content */}

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {/* Love */}

        <div className="bg-green-50 rounded-3xl p-6">

          <div className="flex items-center gap-2 mb-4">

            <ThumbsUp className="text-green-600" />

            <h3 className="font-bold text-green-700">
              Guests Loved
            </h3>

          </div>

          <ul className="space-y-3 text-gray-700">

            <li>✔ Clean Rooms</li>

            <li>✔ Friendly Staff</li>

            <li>✔ Peaceful Location</li>

            <li>✔ Scenic Mountain View</li>

          </ul>

        </div>

        {/* Dislike */}

        <div className="bg-red-50 rounded-3xl p-6">

          <div className="flex items-center gap-2 mb-4">

            <ThumbsDown className="text-red-600" />

            <h3 className="font-bold text-red-700">
              Guests Mentioned
            </h3>

          </div>

          <ul className="space-y-3 text-gray-700">

            <li>❌ Slow Wi-Fi</li>

            <li>❌ Breakfast Variety</li>

            <li>❌ Parking Space</li>

          </ul>

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

            Improve your breakfast menu and
            upgrade Wi-Fi speed to increase guest
            satisfaction and improve your overall
            ratings.

          </p>

        </div>

      </div>

    </div>
  );
}

export default AISummaryCard;