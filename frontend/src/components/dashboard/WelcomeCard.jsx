import { Home, User, Star } from "lucide-react";

function WelcomeCard({ data }) {

  if (!data) {

    return (
      <div className="mt-8 bg-white rounded-3xl p-10 shadow-xl">
        Loading Dashboard...
      </div>
    );

  }

  return (

    <div className="relative mt-8 rounded-3xl p-8 md:p-10 text-white shadow-xl overflow-hidden bg-gradient-to-br from-rose-950 via-rose-900 to-[#3a0f1f]">

      {/* Ambient glow + texture — the one bold move on this page, kept quiet everywhere else */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.08] pointer-events-none" />

      <div className="relative">

        <p className="uppercase tracking-[3px] text-xs text-gold-300 font-mono">
          Owner Dashboard
        </p>

        <h1 className="font-display text-3xl md:text-4xl font-semibold mt-2">
          Welcome back, {data.owner?.name?.split(" ")[0] || "there"} 👋
        </h1>

        <p className="mt-2 text-rose-100/80">
          Here's what's happening at {data.homestay?.name || "your homestay"} today.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div className="bg-white/8 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 text-rose-100/70">
              <User size={18} />
              <span className="font-medium text-sm">Owner</span>
            </div>
            <h2 className="text-xl font-semibold mt-3">
              {data.owner.name}
            </h2>
          </div>

          <div className="bg-white/8 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 text-rose-100/70">
              <Home size={18} />
              <span className="font-medium text-sm">Homestay</span>
            </div>
            <h2 className="text-xl font-semibold mt-3">
              {data.homestay.name}
            </h2>
          </div>

          <div className="bg-white/8 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-3 text-rose-100/70">
              <Star size={18} className="text-gold-400" />
              <span className="font-medium text-sm">Average Rating</span>
            </div>
            <h2 className="text-xl font-semibold mt-3 text-gold-300">
              {data.stats.averageRating} <span className="text-rose-100/60 text-base font-normal">/ 5</span>
            </h2>
          </div>

        </div>

      </div>

    </div>

  );

}

export default WelcomeCard;
