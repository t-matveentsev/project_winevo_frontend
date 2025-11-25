import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFavorites } from "../../redux/auth/operations";
import { selectFavorites } from "../../redux/auth/selectors";

import s from "./FavoritesPage.module.css";
import Container from "../../components/Container/Container";
import Wine from "../../components/Wine/Horizzont";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const favorites = useSelector(selectFavorites);

  return (
    <section className={s.favoritesBackground}>
      <Container>
        <div className={s.wrapper}>
          <div>
            <h2 className={s.title}>MY FAVORITES</h2>
            <p className={s.subtitle}>
              Your favorite wines will be stored here
            </p>
          </div>
          <div>
            {favorites.length === 0 ? (
              <p>you don`t have any favorites</p>
            ) : (
              <ul className={s.wineList}>
                {favorites.map((item) => (
                  <Wine key={item._id} {...item} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FavoritesPage;
