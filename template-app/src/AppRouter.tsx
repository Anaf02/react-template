import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Foods from "./pages/Foods/Foods";
import Login from "./pages/Login/Login";
import { useSimpleAuth } from "./components/Context/AuthContextWithoutToken/useSimpleAuthHook";
import Layout from "./components/Layout/Layout";

function AppRouter() {
  const { isAuthenticated } = useSimpleAuth();
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/role" element={isAuthenticated ? ( userData?.role=="role"? <Role />:<Navigate to="/" replace/>) : (<Navigate to="/login" replace/>)}/> */}
        <Route path="/food/:id" element={<Foods />} />
      </Route>

      <Route path="/login" element={!isAuthenticated ? (<Login />) : (<Navigate to="/" replace />)} />
    </Routes>
  );
}

export default AppRouter;


const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSimpleAuth();
  if (!isAuthenticated) {
    navigate("/login");
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const AdminRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userData } = useSimpleAuth();
  if (!isAuthenticated) {
    navigate("/login");
  }
  else if (userData?.role != "admin") {
    navigate("/")
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};