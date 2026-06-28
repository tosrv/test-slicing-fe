import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import VehicleList from "../pages/VehicleList";
import ComingSoon from "../pages/ComingSoon";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/vehicle-list" replace />,
          },
          {
            path: "dashboard",
            element: <ComingSoon title="Dashboard" />,
          },
          {
            path: "job",
            element: <ComingSoon title="Job" />,
          },
          {
            path: "vehicle-list",
            element: <VehicleList />,
          },
          {
            path: "settings",
            element: <ComingSoon title="Settings" />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
