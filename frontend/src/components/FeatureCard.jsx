import { motion } from "framer-motion";

function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:border-sky-400"
    >
      <div className="text-sky-400 text-5xl mb-6">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">
        {title}
      </h2>

      <p className="text-gray-300 leading-7">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;