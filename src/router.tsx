import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LoginPage } from "./pages/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<LoginPage />} />)
);
