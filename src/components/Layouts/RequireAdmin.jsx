import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectIsLoggedIn, selectLoading } from "../../redux/auth/selectors";

export default function RequireAdmin() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loading = useSelector(selectLoading);
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  if (!isLoggedIn) {
    return <Navigate to="/admin/signin" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
