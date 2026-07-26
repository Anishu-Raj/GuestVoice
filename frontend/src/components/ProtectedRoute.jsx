import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const { loading, dbUser } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!dbUser) {
    toast("Please login to continue");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;