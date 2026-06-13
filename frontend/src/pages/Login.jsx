import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">
          Login
        </h1>

        <p className="text-gray-600">
          Authentication functionality will be implemented in future weeks.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Login;