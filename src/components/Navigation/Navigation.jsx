import clsx from "clsx";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink className={buildLinkClass} to="/home">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/wine-collection">
        Collection
      </NavLink>
      <NavLink className={buildLinkClass} to="/wine-countries">
        Wine countries
      </NavLink>
      <NavLink className={buildLinkClass} to="/grape-varieties">
        Grape varieties
      </NavLink>
    </nav>
  );
};

export default Navigation;
