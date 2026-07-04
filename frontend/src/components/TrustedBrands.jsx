import { motion } from "framer-motion";

const brands = [
  "Google Reviews",
  "Booking.com",
  "Airbnb",
  "TripAdvisor",
  "Agoda",
  "Expedia",
];

function TrustedBrands() {
  return (
    <section className="bg-slate-900 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          className="text-center text-gray-400 uppercase tracking-widest"
        >
          Trusted by Modern Hospitality Businesses
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

          {brands.map((brand, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5
              }}
              className="bg-slate-800 border border-white/10 rounded-xl p-5 text-center text-white font-semibold shadow-lg"
            >
              {brand}
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustedBrands;