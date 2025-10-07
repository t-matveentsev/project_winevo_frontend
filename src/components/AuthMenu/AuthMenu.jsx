import { NavLink } from "react-router-dom";
import buildLinkClass from "../../services/buildLinkClass";

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
