import { Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function DashboardNavbar() {

  const { dbUser } = useAuth();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (

    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-8 py-6 flex items-center justify-between">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">

          Welcome back,

          <span className="text-pink-600">

            {" "}

            {dbUser?.name || "Owner"}

          </span>

          👋

        </h1>

        <p className="text-gray-500 mt-2">

          {today}

        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="relative bg-pink-50 p-3 rounded-2xl hover:bg-pink-100 transition">

          <Bell className="text-pink-600" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-2">

          <img
            src={
              dbUser?.photo ||
              "https://ui-avatars.com/api/?name=GuestVoice"
            }
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="font-semibold">

              {dbUser?.name || "Owner"}

            </h3>

            <p className="text-sm text-gray-500">

              Homestay Owner

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default DashboardNavbar;