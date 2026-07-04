function Stats() {

  const stats = [
    { title: "Reviews", value: "248+" },
    { title: "Hotels", value: "35+" },
    { title: "Accuracy", value: "92%" },
    { title: "Rating", value: "4.8★" },
  ];

  return (

    <section className="bg-slate-950 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center"
          >

            <h2 className="text-4xl font-bold text-purple-400">
              {item.value}
            </h2>

            <p className="text-gray-400 mt-3">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Stats;