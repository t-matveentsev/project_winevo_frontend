import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ behavior = "auto" }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
};

export default ScrollToTop;
