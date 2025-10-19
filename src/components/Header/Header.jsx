import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";

import styles from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.headerBackground}>
      <div className={styles.inner}>
        <Navigation />
        <div className={styles.brand}>
          <a href="/home">WINEVO</a>
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </div>
    </header>
  );
};

export default Header;
