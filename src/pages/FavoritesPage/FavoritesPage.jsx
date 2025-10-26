import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFavorites } from "../../redux/auth/operations";
import { selectFavorites } from "../../redux/auth/selectors";

import s from "./FavoritesPage.module.css";
import Wine from "../../components/Wine/Wine";
import Container from "../../components/Container/Container";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const favorites = useSelector(selectFavorites);

  if (!Array.isArray(favorites) || favorites.length === 0) {
    return <p>you don`t have any favorites</p>;
  }

  return (
    <section className={s.favoritesBackground}>
      <Container>
        <div>
          <ul>
            {favorites.map((item) => (
              <Wine key={item._id} {...item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default FavoritesPage;
