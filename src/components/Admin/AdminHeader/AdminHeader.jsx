import clsx from "clsx";
import { NavLink } from "react-router-dom";

import s from "./AdminHeader.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AdminHeader = () => {
  return (
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
    </nav>
  );
};

export default AdminHeader;
