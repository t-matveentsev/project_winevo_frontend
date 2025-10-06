import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { signoutThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";

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
      <Link to={`/my-favorites`}>My favorites</Link>
      {/* <p>Status, {users.role}</p> */}
      <button type="button" onClick={handleLogOut}>
        signout
      </button>
    </div>
  );
};

export default UserMenu;
