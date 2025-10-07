import { useDispatch, useSelector } from "react-redux";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import { useEffect } from "react";
import { fetchFavorites } from "../../redux/auth/operations";
import { selectFavorites } from "../../redux/auth/selectors";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  return (
    <div>
      <FavoritesList favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
