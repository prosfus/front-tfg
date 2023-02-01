import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LoginPage } from "./pages/login";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<LoginPage />} />)
);
