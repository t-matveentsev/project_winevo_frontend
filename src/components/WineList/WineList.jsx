import { useDispatch, useSelector } from "react-redux";
import { selectWines } from "../../redux/wines/selectors";
import Wine from "../Wine/wine";
import { deleteWineById } from "../../redux/wines/operations";

const WineList = ({ admin = false }) => {
  const dispatch = useDispatch();
  const wines = useSelector(selectWines);

  const handleDelete = (id) => {
    dispatch(deleteWineById(id));
  };

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
    </div>
  );
};

export default WineList;
