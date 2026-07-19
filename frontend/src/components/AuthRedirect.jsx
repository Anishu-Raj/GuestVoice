import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AuthRedirect() {

  const { loading, dbUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {

    if (loading) return;

    if (!dbUser) {

      navigate("/login");

      return;

    }

    if (!dbUser.isProfileCompleted) {

      navigate("/complete-profile");

      return;

    }

    switch (dbUser.role) {

      case "owner":

        navigate("/dashboard");

        break;

      case "guest":

        navigate("/guest-dashboard");

        break;

      case "admin":

        navigate("/admin-dashboard");

        break;

      default:

        navigate("/login");

    }

  }, [loading, dbUser, navigate]);

  return null;

}

export default AuthRedirect;