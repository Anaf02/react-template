import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Foods from "./pages/Foods/Foods";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/food/:id" element={<Foods />} />
    </Routes>
  );
}

export default AppRouter;
