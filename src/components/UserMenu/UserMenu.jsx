import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { signoutThunk } from "../../redux/auth/operations";
import { NavLink, useNavigate } from "react-router-dom";
import buildLinkClass from "../../services/buildLinkClass";
import capitalizeFirst from "../../helpers/capitalizeFirst";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(signoutThunk());
    navigate("/");
  };
  return (
    <div className={s.UserMenuWrapper}>
      <NavLink
        className={({ isActive }) => buildLinkClass({ isActive })}
        to={`/my-favorites`}
      >
        My favorites
      </NavLink>
      <p>{capitalizeFirst(user.username)}</p>
      <button className={s.logoutBtn} type="button" onClick={handleLogOut}>
        <svg width="16" height="16" fill="none">
          <use href="sprite.svg#logout-icon"></use>
        </svg>
      </button>
    </div>
  );
};

export default UserMenu;
