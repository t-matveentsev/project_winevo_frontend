import clsx from "clsx";
import { NavLink } from "react-router-dom";

import s from "./AuthMenu.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthMenu = () => {
  return (
    <div>
      <NavLink className={buildLinkClass} to="/signup">
        Sign up
      </NavLink>
      <NavLink className={buildLinkClass} to="/signin">
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthMenu;
