import { motion } from "framer-motion";
import { Star, TrendingUp, Sparkles, Building2 } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587293005014-ecd16293d120?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-rose-950/80 to-rose-700/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[3px] text-gold-400 font-mono text-sm">
            AI Hospitality Intelligence
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-5 leading-tight">
            Because Every Review
            <br />
            <span className="text-rose-300">Matters.</span>
          </h1>

          <p className="text-white/70 mt-8 text-lg sm:text-xl leading-8 max-w-lg">
            GuestVoice reads every guest review for you — sentiment, recurring
            topics, and what to fix next — so homestay owners spend less
            time reading feedback and more time acting on it.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">

            <a href="#homestays">
              <button className="bg-rose-600 hover:bg-rose-700 transition px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-rose-950/30">
                Explore Homestays
              </button>
            </a>

            <a href="/register">
              <button className="border border-white/30 hover:border-gold-400 hover:text-gold-400 transition px-8 py-4 rounded-xl text-white font-medium">
                List Your Homestay
              </button>
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-8 mt-16 font-mono">

            <div>
              <h2 className="text-3xl font-bold text-white">120+</h2>
              <p className="text-white/50 text-sm mt-1">Homestays</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">25K+</h2>
              <p className="text-white/50 text-sm mt-1">Reviews</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">95%</h2>
              <p className="text-white/50 text-sm mt-1">Satisfaction</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT — live insight panel */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8">

            <div className="flex items-center gap-2">
              <Sparkles className="text-gold-400" size={18} />
              <p className="text-white font-semibold">Live Review Intelligence</p>
            </div>

            <div className="mt-8 space-y-4 font-mono">

              <div className="flex justify-between items-center border-b border-white/15 pb-4">
                <div>
                  <p className="text-xs text-white/50">OVERALL RATING</p>
                  <h3 className="text-white text-2xl font-bold mt-1">4.8</h3>
                </div>
                <Star className="text-gold-400" size={28} />
              </div>

              <div className="flex justify-between items-center border-b border-white/15 pb-4">
                <div>
                  <p className="text-xs text-white/50">POSITIVE SENTIMENT</p>
                  <h3 className="text-white text-2xl font-bold mt-1">92%</h3>
                </div>
                <TrendingUp className="text-rose-300" size={28} />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-white/50">PARTNER HOMESTAYS</p>
                  <h3 className="text-white text-2xl font-bold mt-1">35</h3>
                </div>
                <Building2 className="text-gold-400" size={28} />
              </div>

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
