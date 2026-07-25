import { Star } from "lucide-react";

function RatingSummary({ distribution }) {

  const demoRatings = [
    { star: 5, percent: 80 },
    { star: 4, percent: 15 },
    { star: 3, percent: 8 },
    { star: 2, percent: 3 },
    { star: 1, percent: 1 },
  ];

  const ratings =
    distribution && distribution.length > 0 ? distribution : demoRatings;

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-slate-800">

        Rating Summary

      </h2>

      <div className="space-y-5 mt-8">

        {ratings.map((item) => (

          <div
            key={item.star}
            className="flex items-center gap-4"
          >

            <div className="flex items-center w-14">

              <Star
                className="text-yellow-400 fill-yellow-400"
                size={18}
              />

              <span className="ml-1">
                {item.star}
              </span>

            </div>

            <div className="flex-1 h-3 bg-gray-200 rounded-full">

              <div
                className="h-3 rounded-full bg-yellow-400"
                style={{
                  width: `${item.percent}%`,
                }}
              ></div>

            </div>

            <span className="font-semibold">

              {item.percent}%

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RatingSummary;