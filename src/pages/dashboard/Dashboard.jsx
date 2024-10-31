import Favorite from "./DashboardPages/Favorite";
import Hotspots from "./DashboardPages/ViewHotspots";
import Events from "./DashboardPages/Events";
import StartChat from "./DashboardPages/startChat";
function Dashboard() {
  return (
    <div className="bg-gray-100 space-y-6 px-6 py-10">
      <div className="flex flex-col gap-6 lg:flex-row">
        <StartChat />
        <Events />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <Hotspots />
        <Favorite />
      </div>
    </div>
  );
}

export default Dashboard;
