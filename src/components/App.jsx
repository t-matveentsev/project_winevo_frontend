import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AboutAsPage from "../pages/AboutAsPage/AboutAsPage";
import AboutWinePage from "../pages/AboutWinePage/AboutWinePage";
import AdminHomePage from "../pages/AdminPages/AdminHomePage/AdminHomePage";
import AdminAddWinePage from "../pages/AdminPages/AdminAddWinePage/AdminAddWinePage";
import AdminEditWinePage from "../pages/AdminPages/AdminEditWinePage/AdminEditWinePage";
import AdminSigninPage from "../pages/AdminPages/AdminSigninPage/AdminSigninPage";
import AdminTypesPage from "../pages/AdminPages/AdminTypesPage/AdminTypesPage";
import AdminVarietalsPage from "../pages/AdminPages/AdminVarietalsPage/AdminVarietalsPage";
import SigninPage from "../pages/SigninPage/SigninPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import PublicLayout from "./Layouts/PublicLayout";
import PrivateLayout from "./Layouts/PrivateLayout";
import AdminLayout from "./Layouts/AdminLayout";
import { Suspense } from "react";
import RequireAdmin from "./Layouts/RequireAdmin";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutAsPage />} />
          <Route path="/wine" element={<AboutWinePage />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route path="/admin/signin" element={<AdminSigninPage />} />

        <Route path="/admin" element={<RequireAdmin />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="wines" replace />} />
            <Route path="wines" element={<AdminHomePage />} />
            <Route path="types" element={<AdminTypesPage />} />
            <Route path="varietals" element={<AdminVarietalsPage />} />
            <Route path="create" element={<AdminAddWinePage />} />
            <Route path="edit/:id" element={<AdminEditWinePage />} />
          </Route>
        </Route>

        {/* <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<Navigate to="wines" replace />} />
          <Route path="wines" element={<AdminHomePage />} />
          <Route path="types" element={<AdminTypesPage />} />
          <Route path="varietals" element={<AdminVarietalsPage />} />
          <Route path="create" element={<AdminAddWinePage />} />
          <Route path="edit/:id" element={<AdminEditWinePage />} />
        </Route> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
