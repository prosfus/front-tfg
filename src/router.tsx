import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import { LoginPage } from "./pages/Login_test";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LoginPage />} />,
    <Route path="/dashboard" element={<DashboardPage />} />,
  ])
);
