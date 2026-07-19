import {
  Upload,
  BarChart3,
  Home,
  Sparkles,
} from "lucide-react";

function QuickActions() {

  const actions = [

    {
      title: "Upload Reviews",
      icon: Upload,
      color: "from-pink-500 to-rose-500",
    },

    {
      title: "View Analytics",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Edit Homestay",
      icon: Home,
      color: "from-green-500 to-emerald-500",
    },

    {
      title: "Generate AI Report",
      icon: Sparkles,
      color: "from-purple-500 to-fuchsia-500",
    },

  ];

  return (

    <div className="mt-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">

        Quick Actions

      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className={`bg-gradient-to-r ${action.color} rounded-3xl p-6 text-white shadow-lg hover:scale-105 transition duration-300`}
            >

              <Icon size={34} />

              <h3 className="mt-5 text-lg font-semibold">

                {action.title}

              </h3>

            </button>

          );

        })}

      </div>

    </div>

  );

}

export default QuickActions;