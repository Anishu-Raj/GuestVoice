import {
  Smile,
  Meh,
  Frown,
} from "lucide-react";

function SentimentAnalytics({ breakdown }) {

  const positive = breakdown?.positive ?? 78;
  const neutral = breakdown?.neutral ?? 15;
  const negative = breakdown?.negative ?? 7;

  const data = [
    {
      title: "Positive",
      value: `${positive}%`,
      color: "bg-green-500",
      icon: Smile,
    },
    {
      title: "Neutral",
      value: `${neutral}%`,
      color: "bg-yellow-500",
      icon: Meh,
    },
    {
      title: "Negative",
      value: `${negative}%`,
      color: "bg-red-500",
      icon: Frown,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-slate-800">
        Review Sentiment
      </h2>

      <p className="text-gray-500 mt-2">
        AI detected sentiment distribution
      </p>

      <div className="space-y-6 mt-8">

        {data.map((item) => {

          const Icon = item.icon;

          return (

            <div key={item.title}>

              <div className="flex justify-between items-center mb-2">

                <div className="flex items-center gap-3">

                  <Icon size={20} />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </div>

                <span className="font-bold">
                  {item.value}
                </span>

              </div>

              <div className="h-3 bg-gray-200 rounded-full">

                <div
                  className={`${item.color} h-3 rounded-full`}
                  style={{ width: item.value }}
                ></div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default SentimentAnalytics;