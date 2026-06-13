function Card({ title, description, image, action }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-semibold mb-4">

          {title}

        </h2>

        <p className="text-gray-600 mb-4">

          {description}

        </p>

        {action && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">

            {action}

          </button>
        )}

      </div>

    </div>
  );
}

export default Card;