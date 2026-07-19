import {
  FaHotel,
  FaStar,
  FaComments,
  FaSmile,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Reviews",
    value: "284",
    icon: <FaComments />,
    color: "bg-pink-500",
  },
  {
    title: "Average Rating",
    value: "4.7",
    icon: <FaStar />,
    color: "bg-yellow-500",
  },
  {
    title: "Happy Guests",
    value: "92%",
    icon: <FaSmile />,
    color: "bg-green-500",
  },
  {
    title: "Homestays",
    value: "6",
    icon: <FaHotel />,
    color: "bg-blue-500",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-xl transition"
        >
          <div>
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>

          <div
            className={`${item.color} text-white p-5 rounded-full text-2xl`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}