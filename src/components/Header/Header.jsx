import clsx from "clsx";
import { NavLink } from "react-router-dom";

import s from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <h2>Header</h2>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/about">
          About as
        </NavLink>
        <NavLink className={buildLinkClass} to="/wine">
          About wine
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
