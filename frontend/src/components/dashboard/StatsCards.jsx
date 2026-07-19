import {
  Star,
  MessageSquare,
  Smile,
  Frown,
} from "lucide-react";

function StatsCards({ data }) {

  const totalReviews = data?.stats?.totalReviews ?? "128";
  const averageRating = data?.stats?.averageRating ?? "4.8";
  const positiveCount =
    data?.sentimentBreakdown && data?.stats?.totalReviews
      ? Math.round((data.sentimentBreakdown.positive / 100) * data.stats.totalReviews)
      : "103";
  const negativeCount =
    data?.sentimentBreakdown && data?.stats?.totalReviews
      ? Math.round((data.sentimentBreakdown.negative / 100) * data.stats.totalReviews)
      : "12";

  const stats = [

    {
      title: "Average Rating",
      value: averageRating,
      icon: Star,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },

    {
      title: "Total Reviews",
      value: totalReviews,
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },

    {
      title: "Positive Reviews",
      value: positiveCount,
      icon: Smile,
      color: "text-green-500",
      bg: "bg-green-50",
    },

    {
      title: "Negative Reviews",
      value: negativeCount,
      icon: Frown,
      color: "text-red-500",
      bg: "bg-red-50",
    },

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-sm">

                  {item.title}

                </p>

                <h2 className="text-4xl font-bold mt-3 text-slate-800">

                  {item.value}

                </h2>

              </div>

              <div
                className={`${item.bg} p-4 rounded-2xl`}
              >

                <Icon
                  className={`${item.color}`}
                  size={30}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}

export default StatsCards;