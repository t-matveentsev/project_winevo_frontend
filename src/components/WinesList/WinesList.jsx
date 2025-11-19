import { useDispatch, useSelector } from "react-redux";
import { selectWines, selectWinesMeta } from "../../redux/wines/selectors";
import Wine from "../Wine/Wine";
import { deleteWineById, fetchWines } from "../../redux/wines/operations";
import Container from "../Container/Container";

import s from "./WinesList.module.css";

const WinesList = ({ admin = false, baseQuery = {} }) => {
  const dispatch = useDispatch();
  const wines = useSelector(selectWines);
  const { page, hasNextPage, loading } = useSelector(selectWinesMeta);

  const handleDelete = (id) => {
    dispatch(deleteWineById(id));
  };

  const loadMore = () => {
    dispatch(fetchWines({ ...baseQuery, page: page + 1, append: true }));
  };

  if (!loading && wines.length === 0) {
    return <p>Nothing found</p>;
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
          <div style={{ marginTop: 16 }}>
            <button onClick={loadMore} disabled={loading}>
              Show more wines
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default WinesList;
