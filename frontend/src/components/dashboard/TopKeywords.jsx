import { Tag } from "lucide-react";

function TopKeywords({ keywords: keywordsProp }) {

  const demoKeywords = [
    { word: "Mountain View", count: 42 },
    { word: "Clean Rooms", count: 38 },
    { word: "Friendly Staff", count: 35 },
    { word: "Homemade Food", count: 29 },
    { word: "Peaceful Stay", count: 25 },
    { word: "Wi-Fi", count: 18 },
    { word: "Breakfast", count: 15 },
    { word: "Parking", count: 10 },
  ];

  const keywords =
    keywordsProp && keywordsProp.length > 0 ? keywordsProp : demoKeywords;

  return (

    <div className="mt-8 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="bg-blue-100 p-3 rounded-2xl">

          <Tag className="text-blue-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Top Keywords
          </h2>

          <p className="text-gray-500">
            Most frequently mentioned by guests
          </p>

        </div>

      </div>

      {/* Keywords */}

      <div className="flex flex-wrap gap-4 mt-8">

        {keywords.map((keyword, index) => (

          <div
            key={index}
            className="flex items-center gap-3 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-full px-5 py-3 hover:shadow-md transition"
          >

            <span className="font-medium text-slate-700">

              {keyword.word}

            </span>

            <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">

              {keyword.count}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default TopKeywords;