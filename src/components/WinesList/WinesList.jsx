import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectWines,
  selectWinesMeta,
} from "../../redux/wines/selectors";
import Wine from "../Wine/Wine";
import { deleteWineById, fetchWines } from "../../redux/wines/operations";
import Container from "../Container/Container";

import s from "./WinesList.module.css";

const WinesList = ({ admin = false, baseQuery = {} }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const wines = useSelector(selectWines);
  const { page, hasNextPage, loading } = useSelector(selectWinesMeta);

  const handleDelete = (id) => {
    dispatch(deleteWineById(id));
  };

  const loadMore = () => {
    dispatch(fetchWines({ ...baseQuery, page: page + 1, append: true }));
  };

  if (!loading && wines.length === 0) {
    return <p className={s.nothing}>Nothing found</p>;
  }

  return (
    <section className={s.wrapper}>
      <Container>
        <ul className={s.wineList}>
          {wines.map((item) => (
            <Wine
              key={item._id}
              {...item}
              admin={admin}
              onDelete={handleDelete}
            />
          ))}
        </ul>

        {hasNextPage && (
          <div className={s.showMore}>
            {console.log(isLoading)}
            {isLoading ? (
              <button
                className={s.showMoreBtn}
                onClick={loadMore}
                disabled={loading}
              >
                loading...
              </button>
            ) : (
              <button
                className={s.showMoreBtn}
                onClick={loadMore}
                disabled={loading}
              >
                Show more
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default WinesList;
