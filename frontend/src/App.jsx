import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CompleteProfile from "./pages/CompleteProfile";

import Dashboard from "./pages/Dashboard";
import GuestDashboard from "./pages/GuestDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ComponentsDemo from "./pages/ComponentsDemo";
import HomestayDetails from "./pages/HomestayDetails";
import AuthRedirect from "./components/AuthRedirect";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Protected Routes */}
          <Route
            path="/complete-profile"
            element={
              <ProtectedRoute>
                <CompleteProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/guest-dashboard"
            element={
              <ProtectedRoute>
                <GuestDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Other Pages */}
          <Route path="/components" element={<ComponentsDemo />} />
          <Route path="/homestay/:id" element={<HomestayDetails />} />
          <Route path="/redirect" element={<AuthRedirect />}/>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;