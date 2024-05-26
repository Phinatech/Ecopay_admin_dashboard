import { createBrowserRouter } from "react-router-dom";
// import HomeLayout from "../Layout/HomeLayout";
// import HomeScreen from "../Pages/HomeScreen";
import DashLayout from "../Layout/DashLayout";
import { lazy } from "react";
// import HomeComp from "../Pages/home/HomeComp";

const HomeComp = lazy(() =>import( "../Pages/home/HomeComp"))

export const DesktopRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashLayout />,
    children: [
      {
        index: true,
        element: <HomeComp />,
      },
    ],
  },
]);
