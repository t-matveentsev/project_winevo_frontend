import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import s from "./MobileMenu.module.css";

const DURATION_MS = 250;

const ensureRoot = () => {
  let el = document.getElementById("modal-root");
  if (!el) {
    el = document.createElement("div");
    el.id = "modal-root";
    document.body.appendChild(el);
  }
  return el;
};

export default function MobileMenu({ open, onClose, id = "site-menu" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const root = ensureRoot();

  const firstLinkRef = useRef(null);

  const [isVisible, setIsVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setIsClosing(false);
    } else if (isVisible) {
      setIsClosing(true);
      const t = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, DURATION_MS);
      return () => clearTimeout(t);
    }
  }, [open, isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isVisible]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  if (!isVisible) return null;

  const closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const linkProps = {
    className: s.link,
    onClick: onClose,
  };

  return createPortal(
    <div
      className={clsx(s.overlay, isClosing && s.closing)}
      onClick={closeOnOverlay}
    >
      <nav
        id={id}
        className={clsx(s.panel, isClosing && s.closing)}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <ul className={s.list}>
          <li>
            <NavLink to="/home" {...linkProps} ref={firstLinkRef}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/wine-collection" {...linkProps}>
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink to="/wine-countries" {...linkProps}>
              Wine countries
            </NavLink>
          </li>
          <li>
            <NavLink to="/grape-varieties" {...linkProps}>
              Grape varieties
            </NavLink>
          </li>
        </ul>

        <div className={s.authMenu} onClick={onClose}>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </div>

        <div className={s.footer}>
          <a href="mailto:tmatveentsev@gmail.com" className={s.meta}>
            tmatveentsev@gmail.com
          </a>
          <a href="tel:+48722268383" className={s.meta}>
            +48 722 268 383
          </a>
          <div className={s.legal}>
            <a href="/privacy-policy">Privacy Policy</a>
            <span>•</span>
            <a href="/public-offer">Public Offer</a>
          </div>
        </div>
      </nav>
    </div>,
    root
  );
}
