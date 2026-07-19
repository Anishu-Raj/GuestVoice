import { Navigate } from "react-router-dom";
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
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;