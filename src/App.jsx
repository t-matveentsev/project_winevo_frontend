import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsRefreshing } from "./redux/auth/selectors";

import PublicLayout from "./Layouts/PublicLayout";
import PrivateLayout from "./Layouts/PrivateLayout";
import AdminLayout from "./Layouts/AdminLayout";
import RequireAdmin from "./Layouts/RequireAdmin";
import AgeVerification from "./components/AgeVerification/AgeVerification";

/* ==== Lazy pages ==== */
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const SigninPage = lazy(() => import("./pages/SigninPage/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const WineCountriesPage = lazy(() =>
  import("./pages/WineCountriesPage/WineCountriesPage")
);
const WineCollectionPage = lazy(() =>
  import("./pages/WineCollectionPage/WineCollectionPage")
);
const WineVarietalsPage = lazy(() =>
  import("./pages/WineVarietalsPage/WineVarietalsPage")
);
const WineViewPage = lazy(() => import("./pages/WineViewPage/WineViewPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/LegalPages/Privacy"));
const PublicOfferPage = lazy(() =>
  import("./pages/LegalPages/PublicOfferPage")
);
const OauthGoogleCallback = lazy(() =>
  import("./pages/OauthGoogleCallback/OauthGoogleCallback")
);
const AdminHomePage = lazy(() => import("./pages/AdminPages/AdminHomePage"));
const AdminTypesPage = lazy(() => import("./pages/AdminPages/AdminTypesPage"));
const AdminVarietalsPage = lazy(() =>
  import("./pages/AdminPages/AdminVarietalsPage")
);
const AdminCreateWinePage = lazy(() =>
  import("./pages/AdminPages/AdminCreateWinePage")
);
const AdminEditWinePage = lazy(() =>
  import("./pages/AdminPages/AdminEditWinePage")
);
const AdminContentSettings = lazy(() =>
  import("./pages/AdminPages/AdminContentSettings")
);

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AgeVerification />

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
