import { Outlet } from "react-router-dom";
import Navbar from "../pages/dashboard/partials/SearchBar";
import SideNav from "../pages/dashboard/partials/SideNav";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="p-4 flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
