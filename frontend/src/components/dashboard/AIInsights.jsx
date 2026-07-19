import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

function AIInsights() {

  const insights = [
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

    </div>

  );

}

export default AIInsights;