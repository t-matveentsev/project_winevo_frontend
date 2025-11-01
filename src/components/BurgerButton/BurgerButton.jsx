import clsx from "clsx";
import s from "./BurgerButton.module.css";

export default function BurgerButton({
  isOpen,
  onToggle,
  label = "Menu",
  id = "site-menu",
}) {
  return (
    <button
      type="button"
      className={clsx(s.button, isOpen && s.open)}
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={onToggle}
    >
      <svg
        className={s.icon}
        viewBox="0 0 24 24"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <line className={clsx(s.line, s.top)} x1="2" y1="7" x2="22" y2="7" />
        <line
          className={clsx(s.line, s.middle)}
          x1="2"
          y1="12"
          x2="16"
          y2="12"
        />
        <line
          className={clsx(s.line, s.bottom)}
          x1="2"
          y1="17"
          x2="22"
          y2="17"
        />
      </svg>
    </button>
  );
}
