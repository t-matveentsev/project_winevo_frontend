import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AboutAsPage from "../pages/AboutAsPage/AboutAsPage";
import AboutWinePage from "../pages/AboutWinePage/AboutWinePage";
import SigninPage from "../pages/SigninPage/SigninPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import PublicLayout from "./Layouts/PublicLayout";
import PrivateLayout from "./Layouts/PrivateLayout";
import AdminLayout from "./Layouts/AdminLayout";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/selectors";
import RequireAdmin from "./Layouts/RequireAdmin";
import AdminHomePage from "../pages/AdminPages/AdminHomePage";
import AdminTypesPage from "../pages/AdminPages/AdminTypesPage";
import AdminVarietalsPage from "../pages/AdminPages/AdminVarietalsPage";
import AdminAddWinePage from "../pages/AdminPages/AdminAddWinePage";
import AdminEditWinePage from "../pages/AdminPages/AdminEditWinePage";
import AdminSigninPage from "../pages/AdminPages/AdminSigninPage";

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes path="/">
        <Route element={<PublicLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-as" element={<AboutAsPage />} />
          <Route path="/about-wine" element={<AboutWinePage />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route path="/admin/signin" element={<AdminSigninPage />} />

        <Route path="/admin" element={<RequireAdmin />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<AdminHomePage />} />
            <Route path="types" element={<AdminTypesPage />} />
            <Route path="varietals" element={<AdminVarietalsPage />} />
            <Route path="create" element={<AdminAddWinePage />} />
            <Route path="edit/:id" element={<AdminEditWinePage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
