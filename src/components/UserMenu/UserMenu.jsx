import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { signoutThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(signoutThunk());
    navigate("/");
  };
  return (
    <div>
      <p>Welcome, {users.username}</p>
      {/* <p>Status, {users.role}</p> */}
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
