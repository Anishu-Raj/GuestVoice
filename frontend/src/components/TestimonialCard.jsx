function TestimonialCard({
  name,
  role,
  review,
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">

      <p className="text-gray-300 italic leading-7">
        "{review}"
      </p>

      <div className="mt-8">

        <h3 className="text-white font-bold">
          {name}
        </h3>

        <p className="text-sky-400">
          {role}
        </p>

      </div>

    </div>
  );
}

export default TestimonialCard;