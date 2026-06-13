import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">
          Dashboard
        </h1>

        <p className="text-gray-600">
          This page will display sentiment trends, review summaries, and business insights generated from guest feedback.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;