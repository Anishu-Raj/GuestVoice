import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <ErrorBoundary>

      <AuthProvider>

        <App />

      </AuthProvider>

      <Toaster position="top-right" />

    </ErrorBoundary>

  </StrictMode>

);