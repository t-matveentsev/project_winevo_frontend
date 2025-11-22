import { useDispatch } from "react-redux";
import { getGoogleOAuthLinkThunk } from "../../redux/auth/operations";

import s from "./GoogleButton.module.css";

export default function GoogleButton({ children = "Continue with Google" }) {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const link = await dispatch(getGoogleOAuthLinkThunk()).unwrap();
      window.location.assign(link);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button className={s.googleBtn} type="button" onClick={handleClick}>
      <svg className={s.icon} width="17" height="17">
        <use href="sprite.svg#google-icon"></use>
      </svg>
      {children}
    </button>
  );
}
