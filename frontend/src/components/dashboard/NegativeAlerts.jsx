import { AlertTriangle, ArrowRight } from "lucide-react";

function NegativeAlerts({ alerts: alertsProp }) {

  const demoAlerts = [

    {
      issue: "Slow Wi-Fi",
      reviews: 5,
      priority: "High",
    },

    {
      issue: "Breakfast Variety",
      reviews: 3,
      priority: "Medium",
    },

    {
      issue: "Parking Space",
      reviews: 2,
      priority: "Low",
    },

  ];

  // Backend sends { issue, review, reviewId } per flagged review (Gemini's
  // per-review recommendation), so normalize it into the shape this UI uses.
  const alerts =
    alertsProp && alertsProp.length > 0
      ? alertsProp.map((a) => ({
          issue: a.issue,
          reviews: 1,
          priority: "High",
        }))
      : demoAlerts;

  return (

    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

      <div className="flex items-center gap-3">

        <div className="bg-red-100 p-3 rounded-2xl">

          <AlertTriangle className="text-red-600" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Negative Alerts
          </h2>

          <p className="text-gray-500">
            Frequently reported guest issues
          </p>

        </div>

      </div>

      <div className="space-y-4 mt-8">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="flex items-center justify-between bg-red-50 rounded-2xl p-5 hover:shadow-md transition"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {alert.issue}
              </h3>

              <p className="text-gray-500 text-sm">
                Mentioned in {alert.reviews} reviews
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold
                ${
                  alert.priority === "High"
                    ? "bg-red-200 text-red-700"
                    : alert.priority === "Medium"
                    ? "bg-yellow-200 text-yellow-700"
                    : "bg-green-200 text-green-700"
                }`}
              >
                {alert.priority}
              </span>

              <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium">

                View

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default NegativeAlerts;