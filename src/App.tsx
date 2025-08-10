// src/App.tsx
import { useLocation } from "react-router-dom";
import Footer from "./layout/usersite/Footer";
import Navbar from "./layout/usersite/Navbar";
import AppRoutes from "./routes/AppRoutes";
import DashboardLayout from "./layout/dashboard/SideNavbar"; // 👈 new layout with sidebar
import DashboardFooter from "./layout/dashboard/DashboardFooter";

const App: React.FC = () => {
  const location = useLocation();

  // Check if current route is dashboard
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      {isDashboardRoute ? (
        <div className="bg-white dark:bg-gray-900">
          <DashboardLayout />
          <AppRoutes />
          <DashboardFooter  />
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
