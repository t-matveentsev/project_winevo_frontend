import { useDispatch } from "react-redux";
import { getGoogleOAuthLinkThunk } from "../../redux/auth/operations";

export default function GoogleButton({ children = "Continue with Google" }) {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const link = await dispatch(getGoogleOAuthLinkThunk()).unwrap();
      window.location.assign(link); // редірект на Google
    } catch (e) {
      // покажи тост/алерт
      console.error(e);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
