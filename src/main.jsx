import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import RootLayOut from "./layout/RootLayout";
import DashboardLayout from "./layout/DashboardLayout";

// pages
import Landing from "./pages/home/Landing";
import NotFound from "./pages/error/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import ChatBuddy from "./pages/dashboard/partials/ChatBuddy";
import HotSpots from "./pages/dashboard/partials/HotSpots";

// styles
import "../src/styles/index.css";

// authentication
import SignUpPage from "./pages/registeration/SignUpPage";
import LoginPage from "./pages/registeration/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Landing />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for undefined paths */}
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="hotspots" element={<HotSpots />} />
          <Route path="chatbuddy" element={<ChatBuddy />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Another catch-all route outside of layouts */}
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
