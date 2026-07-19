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

    <div className="mt-8 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl">

      <h1 className="text-3xl font-bold">

        Welcome back 👋

      </h1>

      <p className="mt-2 text-pink-100">

        Here's what's happening in your homestay today.

      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <User />

            <span className="font-semibold">

              Owner

            </span>

          </div>

          <h2 className="text-xl font-bold mt-3">

            {data.owner.name}

          </h2>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <Home />

            <span className="font-semibold">

              Homestay

            </span>

          </div>

          <h2 className="text-xl font-bold mt-3">

            {data.homestay.name}

          </h2>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <Star />

            <span className="font-semibold">

              Average Rating

            </span>

          </div>

          <h2 className="text-xl font-bold mt-3">

            ⭐ {data.stats.averageRating} / 5

          </h2>

        </div>

      </div>

    </div>

  );

}

export default WelcomeCard;