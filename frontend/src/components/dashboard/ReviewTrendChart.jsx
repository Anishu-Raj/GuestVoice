import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", reviews: 25 },
  { month: "Feb", reviews: 38 },
  { month: "Mar", reviews: 42 },
  { month: "Apr", reviews: 55 },
  { month: "May", reviews: 61 },
  { month: "Jun", reviews: 75 },
];

function ReviewTrendChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-slate-800">
        Monthly Review Trend
      </h2>

      <p className="text-gray-500 mt-2">
        Reviews received over the last 6 months
      </p>

      <div className="h-80 mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="reviews"
              stroke="#ec4899"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ReviewTrendChart;