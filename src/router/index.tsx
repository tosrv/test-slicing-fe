import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import VehicleList from "../pages/VehicleList";

const router = createBrowserRouter([
  {
    path: "/vehicle-list",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <VehicleList />,
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
