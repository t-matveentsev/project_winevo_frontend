import { NavLink } from "react-router-dom";
import buildLinkClass from "../../../services/buildLinkClass";

import s from "./AdminNavigation.module.css";

const AdminNavigation = () => {
  return (
    <nav className={s.adminNavigation}>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive })}
        to="/admin/home"
      >
        Home page
      </NavLink>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive })}
        to="/admin/content-settings"
      >
        Content-settings
      </NavLink>
    </nav>
  );
};

export default AdminNavigation;
