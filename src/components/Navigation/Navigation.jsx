import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";
import buildLinkClass from "../../services/buildLinkClass";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive })}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive })}
        to="/wine-collection"
      >
        Collection
      </NavLink>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive })}
        to="/wine-countries"
      >
        Wine countries
      </NavLink>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive })}
        to="/grape-varieties"
      >
        Grape varieties
      </NavLink>
    </nav>
  );
};

export default Navigation;
