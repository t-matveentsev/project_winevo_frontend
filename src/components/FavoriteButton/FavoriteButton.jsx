// src/components/FavoriteButton/FavoriteButton.jsx
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import {
  addFavoriteById,
  deleteFavoriteById,
  fetchFavorites,
} from "../../redux/auth/operations";
import { selectFavoriteIds } from "../../redux/auth/selectors";

const FavoriteButton = ({ wineId, className = "" }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(selectFavoriteIds);
  const [pending, setPending] = useState(false);

  const isFavorite = useMemo(
    () => favoriteIds.includes(wineId),
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
    <button
      type="button"
      onClick={handleToggle}
      disabled={pending}
      aria-pressed={isFavorite}
      className={className}
    >
      {pending ? "..." : isFavorite ? "Remove favorite" : "Add favorite"}
    </button>
  );
};

export default FavoriteButton;
