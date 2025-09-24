import clsx from "clsx";

import s from "./AdminHeader.module.css";
import { NavLink, Outlet } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AdminHeader = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <nav>
        <NavLink className={buildLinkClass} to="/admin/wines">
          Wines list
        </NavLink>
        <NavLink className={buildLinkClass} to="/admin/types">
          Types list
        </NavLink>
        <NavLink className={buildLinkClass} to="/admin/varietals">
          Varietals list
        </NavLink>
        <NavLink className={buildLinkClass} to="/admin/create">
          Wine create
        </NavLink>
        <NavLink className={buildLinkClass} to="/admin/signin">
          Admin sign in
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminHeader;
