import { motion } from "framer-motion";
import {
  Star,
  TrendingUp,
  MessageSquare,
  Building2,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100">

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full blur-[150px] opacity-30"></div>

      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full blur-[170px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[4px] text-pink-500 font-semibold">
            AI Hospitality Intelligence
          </p>

          <h1 className="text-6xl font-bold text-slate-800 mt-5 leading-tight">
            Because Every Review
            <br />

            <span className="text-pink-500">
              Matters.
            </span>
          </h1>

          <p className="text-gray-600 mt-8 text-xl leading-9">
            GuestVoice helps homestay owners understand guest feedback,
            discover improvement opportunities, and enhance every guest
            experience through AI-powered review intelligence.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">

            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition px-8 py-4 rounded-xl text-white font-semibold shadow-lg">
              Explore Dashboard
            </button>

            <button className="border border-pink-300 hover:bg-pink-100 transition px-8 py-4 rounded-xl text-pink-600 font-medium">
              Analyze Reviews
            </button>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>
              <h2 className="text-4xl font-bold text-pink-600">
                120+
              </h2>

              <p className="text-gray-600">
                Homestays
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-pink-600">
                25K+
              </h2>

              <p className="text-gray-600">
                Reviews
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-pink-600">
                95%
              </h2>

              <p className="text-gray-600">
                Satisfaction
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-2xl">

            <h2 className="text-slate-800 text-2xl font-bold">
              GuestVoice AI
            </h2>

            <p className="text-gray-500">
              Review Intelligence Dashboard
            </p>

            <div className="mt-8 space-y-5">

              <div className="bg-pink-100 rounded-xl p-5 flex justify-between items-center">

                <div>

                  <p className="text-gray-600">
                    Overall Rating
                  </p>

                  <h3 className="text-slate-800 text-3xl font-bold">
                    4.8
                  </h3>

                </div>

                <Star className="text-yellow-500" size={38} />

              </div>

              <div className="bg-green-100 rounded-xl p-5 flex justify-between items-center">

                <div>

                  <p className="text-gray-600">
                    Positive Reviews
                  </p>

                  <h3 className="text-slate-800 text-3xl font-bold">
                    92%
                  </h3>

                </div>

                <TrendingUp className="text-green-600" size={34} />

              </div>

              <div className="bg-purple-100 rounded-xl p-5 flex justify-between items-center">

                <div>

                  <p className="text-gray-600">
                    AI Confidence
                  </p>

                  <h3 className="text-slate-800 text-3xl font-bold">
                    98%
                  </h3>

                </div>

                <MessageSquare className="text-purple-600" size={34} />

              </div>

              <div className="bg-orange-100 rounded-xl p-5 flex justify-between items-center">

                <div>

                  <p className="text-gray-600">
                    Partner Homestays
                  </p>

                  <h3 className="text-slate-800 text-3xl font-bold">
                    35
                  </h3>

                </div>

                <Building2 className="text-orange-500" size={34} />

              </div>

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;