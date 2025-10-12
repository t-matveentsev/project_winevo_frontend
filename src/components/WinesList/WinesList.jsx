import { useDispatch, useSelector } from "react-redux";
import { selectWines, selectWinesMeta } from "../../redux/wines/selectors";
import Wine from "../Wine/wine";
import { deleteWineById, fetchWines } from "../../redux/wines/operations";

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
    <div>
      <ul>
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
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default WinesList;
