import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import {
  addFavoriteById,
  deleteFavoriteById,
} from "../../redux/auth/operations";
import {
  selectFavoriteIds,
  selectIsLoggedIn,
} from "../../redux/auth/selectors";

import s from "./FavoritesButton.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const FavoriteButton = ({ wineId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const favoriteIds = useSelector(selectFavoriteIds);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const reduxIsFavorite = useMemo(
    () => (favoriteIds ?? []).includes(wineId),
    [favoriteIds, wineId]
  );

  const [optimistic, setOptimistic] = useState(reduxIsFavorite);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setOptimistic(reduxIsFavorite);
  }, [reduxIsFavorite]);

  const handleToggle = async () => {
    if (!isLoggedIn) {
      navigate("/signin", { replace: true, state: { from: location } });
      return;
    }
    if (pending) return;

    const next = !optimistic;

    setOptimistic(next);
    setPending(true);

    try {
      if (next) {
        await dispatch(addFavoriteById(wineId)).unwrap();
      } else {
        await dispatch(deleteFavoriteById(wineId)).unwrap();
      }
    } catch (e) {
      console.error(e);
      setOptimistic(!next);
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={optimistic}
      className={s.favoriteBtn}
    >
      <svg
        className={`${s.cardGrapeIcon} ${optimistic ? s.favorite : ""}`}
        viewBox="0 0 24 24"
      >
        <use href="sprite.svg#grape" />
      </svg>
    </button>
  );
};

export default FavoriteButton;
