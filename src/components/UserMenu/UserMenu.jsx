import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { signoutThunk } from "../../redux/auth/operations";
import { NavLink, useNavigate } from "react-router-dom";
import buildLinkClass from "../../services/buildLinkClass";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(signoutThunk());
    navigate("/");
  };
  return (
    <div>
      <p>Welcome, {user.username}</p>
      <NavLink className={buildLinkClass} to={`/my-favorites`}>
        My favorites
      </NavLink>
      {/* <p>Status, {users.role}</p> */}
      <button type="button" onClick={handleLogOut}>
        signout
      </button>
    </div>
  );
};

export default UserMenu;
