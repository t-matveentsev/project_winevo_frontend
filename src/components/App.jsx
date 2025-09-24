import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AboutAsPage from "../pages/AboutAsPage/AboutAsPage";
import AboutWinePage from "../pages/AboutWinePage/AboutWinePage";
import AdminHomePage from "../pages/AdminPages/AdminHomePage/AdminHomePage";
import AdminWinesPage from "../pages/AdminPages/AdminWinesPage/AdminWinesPage";
import AdminAddWinePage from "../pages/AdminPages/AdminAddWinePage/AdminAddWinePage";
import AdminEditWinePage from "../pages/AdminPages/AdminEditWinePage/AdminEditWinePage";
import SigninPage from "../pages/SigninPage/SigninPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";
import AdminSignin from "../pages/AdminPages/AdminSignin/AdminSignin";
import AdminTypesPage from "../pages/AdminPages/AdminTypesPage/AdminTypesPage";
import AdminVarietalsPage from "../pages/AdminPages/AdminVarietalsPage/AdminVarietalsPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutAsPage />} />
          <Route path="/wine" element={<AboutWinePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin/wines" element={<AdminHomePage />} />
          <Route path="/admin/types" element={<AdminTypesPage />} />
          <Route path="/admin/varietals" element={<AdminVarietalsPage />} />
          <Route path="/admin/create" element={<AdminAddWinePage />} />
          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/edit/:id" element={<AdminEditWinePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
