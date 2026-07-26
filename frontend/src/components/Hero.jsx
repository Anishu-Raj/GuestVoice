import { motion } from "framer-motion";
import { Star, TrendingUp, Sparkles, Building2 } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-pine-950">

      {/* Sunrise glow behind the ridgeline */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-ember-500 rounded-full blur-[160px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-56 sm:pb-64 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[3px] text-ember-400 font-mono text-sm">
            AI Hospitality Intelligence
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold text-mist-100 mt-5 leading-tight">
            Because Every Review
            <br />
            <span className="text-ember-500">Matters.</span>
          </h1>

          <p className="text-pine-100/70 mt-8 text-lg sm:text-xl leading-8 max-w-lg" style={{ color: "#c9d4cc" }}>
            GuestVoice reads every guest review for you — sentiment, recurring
            topics, and what to fix next — so homestay owners across the
            hills spend less time reading feedback and more time acting on it.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">

            <a href="#homestays">
              <button className="bg-ember-500 hover:bg-ember-400 transition px-8 py-4 rounded-xl text-pine-950 font-semibold shadow-lg shadow-ember-500/20">
                Explore Homestays
              </button>
            </a>

            <a href="/register">
              <button className="border border-mist-100/20 hover:border-ember-400 hover:text-ember-400 transition px-8 py-4 rounded-xl text-mist-100 font-medium">
                List Your Homestay
              </button>
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-8 mt-16 font-mono">

            <div>
              <h2 className="text-3xl font-bold text-mist-100">120+</h2>
              <p className="text-pine-100/50 text-sm mt-1" style={{ color: "#8a9990" }}>Homestays</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-mist-100">25K+</h2>
              <p className="text-sm mt-1" style={{ color: "#8a9990" }}>Reviews</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-mist-100">95%</h2>
              <p className="text-sm mt-1" style={{ color: "#8a9990" }}>Satisfaction</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT — live insight panel */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="bg-pine-900/60 backdrop-blur border border-mist-100/10 rounded-3xl p-8">

            <div className="flex items-center gap-2">
              <Sparkles className="text-ember-500" size={18} />
              <p className="text-mist-100 font-semibold">Live Review Intelligence</p>
            </div>

            <div className="mt-8 space-y-4 font-mono">

              <div className="flex justify-between items-center border-b border-mist-100/10 pb-4">
                <div>
                  <p className="text-xs" style={{ color: "#8a9990" }}>OVERALL RATING</p>
                  <h3 className="text-mist-100 text-2xl font-bold mt-1">4.8</h3>
                </div>
                <Star className="text-ember-500" size={28} />
              </div>

              <div className="flex justify-between items-center border-b border-mist-100/10 pb-4">
                <div>
                  <p className="text-xs" style={{ color: "#8a9990" }}>POSITIVE SENTIMENT</p>
                  <h3 className="text-mist-100 text-2xl font-bold mt-1">92%</h3>
                </div>
                <TrendingUp className="text-sage-400" size={28} />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs" style={{ color: "#8a9990" }}>PARTNER HOMESTAYS</p>
                  <h3 className="text-mist-100 text-2xl font-bold mt-1">35</h3>
                </div>
                <Building2 className="text-ember-400" size={28} />
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Signature: layered mountain ridge silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        style={{ height: "220px" }}
      >
        <path
          d="M0,180 L120,120 L260,170 L400,90 L560,160 L700,70 L860,150 L1020,100 L1180,170 L1320,110 L1440,150 L1440,260 L0,260 Z"
          fill="#1b3327"
          opacity="0.55"
        />
        <path
          d="M0,220 L160,150 L320,200 L480,130 L640,190 L800,120 L960,195 L1120,140 L1280,200 L1440,160 L1440,260 L0,260 Z"
          fill="#14291f"
          opacity="0.8"
        />
        <path
          d="M0,260 L140,205 L300,245 L460,190 L620,240 L780,195 L940,245 L1100,205 L1260,250 L1440,220 L1440,260 L0,260 Z"
          fill="#0e2018"
        />
      </svg>

    </section>
  );
}

export default Hero;
