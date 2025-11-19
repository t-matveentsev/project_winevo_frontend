import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AboutWinePage from "./pages/WineCountriesPage/WineCountriesPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import PublicLayout from "./Layouts/PublicLayout";
import PrivateLayout from "./Layouts/PrivateLayout";
import AdminLayout from "./Layouts/AdminLayout";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RequireAdmin from "./Layouts/RequireAdmin";
import AdminHomePage from "./pages/AdminPages/AdminHomePage";
import AdminTypesPage from "./pages/AdminPages/AdminTypesPage";
import AdminVarietalsPage from "./pages/AdminPages/AdminVarietalsPage";
import AdminCreateWinePage from "./pages/AdminPages/AdminCreateWinePage";
import AdminEditWinePage from "./pages/AdminPages/AdminEditWinePage";
import WineViewPage from "./pages/WineViewPage/WineViewPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import WineCountriesPage from "./pages/WineCountriesPage/WineCountriesPage";
import WineCollectionPage from "./pages/WineCollectionPage/WineCollectionPage";
import WineVarietalsPage from "./pages/WineVarietalsPage/WineVarietalsPage";
import PrivacyPolicyPage from "./pages/LegalPages/Privacy";
import PublicOfferPage from "./pages/LegalPages/PublicOfferPage";
import OauthGoogleCallback from "./pages/OauthGoogleCallback/OauthGoogleCallback";
import AdminContentSettings from "./pages/AdminPages/AdminContentSettings";

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="wine-collection" element={<WineCollectionPage />} />
          <Route path="wine-countries" element={<WineCountriesPage />} />
          <Route path="grape-varieties" element={<WineVarietalsPage />} />
          <Route path="wine-details/:id" element={<WineViewPage />} />
          <Route path="my-favorites" element={<FavoritesPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="public-offer" element={<PublicOfferPage />} />
          <Route
            path="/auth/auth-with-google"
            element={<OauthGoogleCallback />}
          />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        <Route path="admin" element={<RequireAdmin />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<AdminHomePage />} />
            <Route path="content-settings" element={<AdminContentSettings />}>
              <Route index element={<Navigate to="types" replace />} />
              <Route path="types" element={<AdminTypesPage />} />
              <Route path="varietals" element={<AdminVarietalsPage />} />
              <Route path="create" element={<AdminCreateWinePage />} />
              <Route path="edit/:id" element={<AdminEditWinePage />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
