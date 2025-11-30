import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.background}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.contactsWrapper}>
            <div className={s.countryWrapper}>
              <p className={s.brand}>WINEVO</p>
              <p className={s.country}>
                <a
                  href="https://www.google.com/maps/place/Warszawa,+Poland/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Poland, Warsaw
                </a>
              </p>
              <p className={s.byText}>
                Out of love for wine and coding
                <br /> project realized by:
                <a
                  className={s.accent}
                  href="https://www.linkedin.com/in/artem-matvieientsev-a5a6862a1/"
                  target="_blank"
                >
                  {" "}
                  Artem Matvieientsev
                </a>
              </p>
            </div>
            <div className={s.socialWrapper}>
              <address className={s.contact}>
                <ul className={s.contactList}>
                  <li>
                    <a href="mailto:tmatveentsev@gmail.com">
                      tmatveentsev@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+48733268383" target="_blank">
                      PL: +48 722 268 383
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/t-matveentsev" target="_blank">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7354967554957656064/"
                      target="_blank"
                    >
                      my CV
                    </a>
                  </li>
                </ul>
              </address>
              <nav className={s.nav}>
                <ul>
                  <li>
                    <NavLink to="/home">HOME</NavLink>
                  </li>
                  <li>
                    <a href="#about">ABOUT US</a>
                  </li>
                  <li>
                    <a href="#team">OUR TEAM</a>
                  </li>
                  <li>
                    <NavLink to="/wine-collection">COLLECTION</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p>receive information about new wines in the collection</p>
              <input type="email" />
              <button>subscribe</button>
            </div>
          </div>
          <div className={s.policy}>
            <div>
              <p>
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
              <p>
                <a href="/public-offer">Public Offer Agreement</a>
              </p>
            </div>
            <div>
              <p>2025 Winevo</p>
              <p> © All rights reserved</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
