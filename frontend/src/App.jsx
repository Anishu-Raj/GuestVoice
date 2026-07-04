import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ComponentsDemo from "./pages/ComponentsDemo";
import HomestayDetails from "./pages/HomestayDetails";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/components" element={<ComponentsDemo />} />
        <Route path="/homestay/:id" element={<HomestayDetails/>}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;