import React from "react";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import Leaderboard from "../compunent/leaderboard/Leaderboard";
import AllContest from "../compunent/contest/AllContest";
import ContestPage from "../compunent/contest/ContestPage";
import DashboardHome from "../page/dashboard/Dashboard";
import AddContest from "../page/dashboard/AddContest";
import DashboardLayout from "../layout/dashboard/DashboardLayout";

interface AppRoute {
  path: string;
  element: React.ReactNode;
}

const appRoutes: AppRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/all-contest", element: <AllContest /> },
  { path: "/leaderboard", element: <Leaderboard /> },
  { path: "/contest/:contestId", element: <ContestPage /> },

  // Dashboard routes wrapped in DashboardLayout
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <DashboardHome />
      </DashboardLayout>
    ),
  },
  {
    path: "/dashboard/add-contest",
    element: (
      <DashboardLayout>
        <AddContest />
      </DashboardLayout>
    ),
  },

  { path: "*", element: <NotFound /> },
];

export default appRoutes;