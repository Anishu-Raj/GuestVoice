function Card({
  title,
  description,
  darkMode,
}) {
  return (
    <div
      className={`rounded-xl shadow-lg p-6 ${
        darkMode
          ? "bg-gray-700 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <p
        className={
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }
      >
        {description}
      </p>
    </div>
  );
}

export default Card;