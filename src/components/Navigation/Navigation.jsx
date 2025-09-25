import clsx from "clsx";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home wine list
      </NavLink>
      <NavLink className={buildLinkClass} to="/about">
        About as
      </NavLink>
      <NavLink className={buildLinkClass} to="/wine">
        About wine
      </NavLink>
    </nav>
  );
};

export default Navigation;
