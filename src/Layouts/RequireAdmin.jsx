import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectRole,
} from "../redux/auth/selectors";

export default function RequireAdmin() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const role = useSelector(selectRole);
  // const location = useLocation();

  // if (isRefreshing) return <div>Loading...</div>;

  // if (!isLoggedIn) {
  //   return <Navigate to="/admin/signin" replace state={{ from: location }} />;
  // }

  // if (role !== "admin") {
  //   return <Navigate to="/home" replace />;
  // }

  return <Outlet />;
}
