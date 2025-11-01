import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";

import s from "./Header.module.css";
import Container from "../Container/Container";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleToggle = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        setOpen(false);
      }, 220);
    } else {
      setOpen(true);
    }
  };

  return (
    <header className={s.headerBackground}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.authMenu}>
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </div>
          <Navigation />
          <div className={s.brand}>
            <a href="/home">WINEVO</a>
          </div>
          <BurgerButton isOpen={open} onToggle={handleToggle} id="site-menu" />
        </div>
      </Container>
      <MobileMenu
        open={open}
        closing={closing}
        onClose={handleToggle}
        id="site-menu"
      />
    </header>
  );
};

export default Header;
