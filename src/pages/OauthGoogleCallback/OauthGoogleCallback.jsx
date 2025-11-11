import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signinWithGoogleThunk } from "../../redux/auth/operations";

export default function OauthGoogleCallback() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const state = params.get("state");

    if (!code) {
      // покажи помилку або відведи назад
      navigate("/signin", { replace: true });
      return;
    }

    dispatch(signinWithGoogleThunk({ code, state }))
      .unwrap()
      .then(() => {
        // якщо куки httpOnly — просто редіректимось, бекенд нас уже “залогінив”
        navigate("/", { replace: true });
      })
      .catch((e) => {
        console.error(e);
        navigate("/signin", { replace: true });
      });
  }, [dispatch, location.search, navigate]);

  return <p>Signing you in with Google…</p>;
}
