import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";

import s from "./Header.module.css";
import Container from "../Container/Container";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.headerBackground}>
      <Container>
        <div className={s.wrapper}>
          <Navigation />
          <div className={s.brand}>
            <a href="/home">WINEVO</a>
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
