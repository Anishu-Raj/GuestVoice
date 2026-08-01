import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  BarChart3,
  Settings,
  LogOut,
  Home,
} from "lucide-react";

function DashboardSidebar({ homestayName }) {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w-72 min-h-screen bg-blush-100 border-r border-rose-950/10 shadow-sm flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-rose-950/10">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
          GuestVoice
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          AI Hospitality Platform
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-5 py-8 space-y-3">

        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
          active
        />

        <SidebarItem
          icon={<MessageSquare size={20} />}
          title="Reviews"
          onClick={() => scrollTo("recent-reviews-section")}
        />

        <SidebarItem
          icon={<Sparkles size={20} />}
          title="AI Insights"
          onClick={() => scrollTo("ai-summary-section")}
        />

        <SidebarItem
          icon={<BarChart3 size={20} />}
          title="Analytics"
          onClick={() => scrollTo("analytics-section")}
        />

        <SidebarItem
          icon={<Settings size={20} />}
          title="Settings"
          onClick={() => navigate("/complete-profile")}
        />

      </nav>

      {/* Homestay */}

      <div className="px-5">

        <div className="rounded-3xl bg-white p-5 border border-rose-950/5">

          <div className="flex items-center gap-3">

            <Home className="text-rose-600" />

            <div>

              <h2 className="font-semibold text-rose-950">
                {homestayName || "My Homestay"}
              </h2>

              <p className="text-sm text-gray-500">
                {homestayName ? "Connected" : "Not Connected"}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Logout */}

      <div className="p-5">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-rose-950 py-3 text-white font-semibold hover:bg-rose-700 transition"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}

function SidebarItem({ icon, title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
        active
          ? "bg-rose-950 text-white shadow-lg"
          : "hover:bg-white text-gray-700"
      }`}
    >
      {icon}

      <span className="font-medium">
        {title}
      </span>
    </button>
  );
}

export default DashboardSidebar;
