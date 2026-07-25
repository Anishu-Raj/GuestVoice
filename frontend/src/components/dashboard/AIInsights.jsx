import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

function AIInsights({ insights: insightsProp }) {

  const iconFor = { positive: TrendingUp, warning: AlertTriangle, recommendation: Lightbulb };
  const styleFor = {
    positive: { color: "text-green-600", bg: "bg-green-50" },
    warning: { color: "text-red-600", bg: "bg-red-50" },
    recommendation: { color: "text-yellow-600", bg: "bg-yellow-50" },
  };

  const demoInsights = [
    {
      icon: TrendingUp,
      title: "Positive Trend",
      color: "text-green-600",
      bg: "bg-green-50",
      description:
        "Guests consistently appreciate your peaceful location and mountain views.",
    },

    {
      icon: AlertTriangle,
      title: "Needs Attention",
      color: "text-red-600",
      bg: "bg-red-50",
      description:
        "Wi-Fi quality has been mentioned negatively in several recent reviews.",
    },

    {
      icon: Lightbulb,
      title: "AI Recommendation",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      description:
        "Improve internet speed and expand breakfast options to increase guest satisfaction.",
    },
  ];

  const insights =
    insightsProp && insightsProp.length > 0
      ? insightsProp.map((item) => ({
          icon: iconFor[item.type] || Lightbulb,
          title: item.title,
          description: item.description,
          ...styleFor[item.type],
        }))
      : insightsProp
      ? [] // real data loaded, but genuinely zero reviews yet
      : demoInsights;

  return (

    <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

      <div className="flex items-center gap-3">

        <div className="bg-pink-100 p-3 rounded-2xl">

          <Sparkles className="text-pink-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">

            AI Insights

          </h2>

          <p className="text-gray-500">

            Automatically generated recommendations

          </p>

        </div>

      </div>

      {insights.length === 0 ? (

        <p className="text-gray-400 text-center py-10">
          No insights yet — they'll show up once guests start leaving reviews.
        </p>

      ) : (

      <div className="space-y-5 mt-8">

        {insights.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className={`${item.bg} rounded-2xl p-6`}
            >

              <div className="flex items-center gap-3">

                <Icon className={item.color} />

                <h3 className="font-bold text-lg">

                  {item.title}

                </h3>

              </div>

              <p className="text-gray-700 leading-7 mt-3">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

      )}

    </div>

  );

}

export default AIInsights;