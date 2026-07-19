import {
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  BarChart3,
  Settings,
  LogOut,
  Home,
} from "lucide-react";

function DashboardSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-pink-100 shadow-sm flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-pink-100">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
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
        />

        <SidebarItem
          icon={<Sparkles size={20} />}
          title="AI Insights"
        />

        <SidebarItem
          icon={<BarChart3 size={20} />}
          title="Analytics"
        />

        <SidebarItem
          icon={<Settings size={20} />}
          title="Settings"
        />

      </nav>

      {/* Homestay */}

      <div className="px-5">

        <div className="rounded-3xl bg-pink-50 p-5">

          <div className="flex items-center gap-3">

            <Home className="text-pink-500" />

            <div>

              <h2 className="font-semibold">
                My Homestay
              </h2>

              <p className="text-sm text-gray-500">
                Not Connected
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Logout */}

      <div className="p-5">

        <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 text-white font-semibold hover:scale-105 transition">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}

function SidebarItem({ icon, title, active }) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
          : "hover:bg-pink-50 text-gray-700"
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