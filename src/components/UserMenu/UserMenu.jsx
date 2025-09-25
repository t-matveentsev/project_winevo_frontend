import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { signoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {users.name}</p>
      <button type="button" onClick={() => dispatch(signoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
