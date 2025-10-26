import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export default function RequireAdmin() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const location = useLocation();

  if (isRefreshing) return <div>Loading...</div>;

  if (!isLoggedIn) {
    return <Navigate to="/admin/signin" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
