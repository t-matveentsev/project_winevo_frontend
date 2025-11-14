import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import {
  addFavoriteById,
  deleteFavoriteById,
  fetchFavorites,
} from "../../redux/auth/operations";
import { selectFavoriteIds } from "../../redux/auth/selectors";

import s from "./FavoritesButton.module.css";

const FavoriteButton = ({ wineId }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(selectFavoriteIds);
  const [pending, setPending] = useState(false);

  const isFavorite = useMemo(
    () => (favoriteIds ?? []).includes(wineId),
    [favoriteIds, wineId]
  );

  const handleToggle = async () => {
    if (!wineId || pending) return;
    setPending(true);
    try {
      if (isFavorite) {
        await dispatch(deleteFavoriteById(wineId)).unwrap();
      } else {
        await dispatch(addFavoriteById(wineId)).unwrap();
        await dispatch(fetchFavorites()).unwrap();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setPending(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        disabled={pending}
        aria-pressed={isFavorite}
        className={s.favoriteBtn}
      >
        <svg
          className={`${s.cardGrapeIcon} ${isFavorite ? s.favorite : ""}`}
          viewBox="0 0 24 24"
        >
          <use href="sprite.svg#grape" />
        </svg>
      </button>
    </div>
  );
};

export default FavoriteButton;
