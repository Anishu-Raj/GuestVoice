import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Link2,
  BarChart3,
  Home,
  Sparkles,
} from "lucide-react";

function QuickActions({ homestayId }) {

  const navigate = useNavigate();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyReviewLink = () => {

    if (!homestayId) {
      toast.error("Homestay not set up yet");
      return;
    }

    const link = `${window.location.origin}/homestay/${homestayId}`;

    navigator.clipboard.writeText(link);
    toast.success("Review link copied — share it with your guests");

  };

  const actions = [

    {
      title: "Share Review Link",
      icon: Link2,
      color: "from-pink-500 to-rose-500",
      onClick: copyReviewLink,
    },

    {
      title: "View Analytics",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      onClick: () => scrollTo("analytics-section"),
    },

    {
      title: "Edit Homestay",
      icon: Home,
      color: "from-green-500 to-emerald-500",
      onClick: () => navigate("/complete-profile"),
    },

    {
      title: "View AI Summary",
      icon: Sparkles,
      color: "from-purple-500 to-fuchsia-500",
      onClick: () => scrollTo("ai-summary-section"),
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
              onClick={action.onClick}
              className={`bg-gradient-to-r ${action.color} rounded-3xl p-6 text-white shadow-lg hover:scale-105 transition duration-300 text-left`}
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
