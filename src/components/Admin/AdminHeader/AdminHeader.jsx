import { NavLink } from "react-router-dom";
import buildLinkClass from "../../../services/buildLinkClass";

const AdminHeader = () => {
  return (
    <nav>
      <NavLink className={buildLinkClass} to="/admin/home">
        Home page
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
