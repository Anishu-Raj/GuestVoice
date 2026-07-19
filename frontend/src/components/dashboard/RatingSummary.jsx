import { Star } from "lucide-react";

function RatingSummary() {

  const ratings = [
    { star: 5, count: 80 },
    { star: 4, count: 15 },
    { star: 3, count: 8 },
    { star: 2, count: 3 },
    { star: 1, count: 1 },
  ];

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
                  width: `${item.count}%`,
                }}
              ></div>

            </div>

            <span className="font-semibold">

              {item.count}%

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RatingSummary;