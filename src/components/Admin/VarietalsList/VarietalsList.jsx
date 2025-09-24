import { useDispatch, useSelector } from "react-redux";
import { selectVarietals } from "../../../redux/varietal/selectors";
import Varietal from "../Varietal/Varietal";
import { deleteVarietalById } from "../../../redux/varietal/operations";

const VarietalsList = () => {
  const dispatch = useDispatch();
  const varietals = useSelector(selectVarietals);

  const handleDelete = (id) => {
    dispatch(deleteVarietalById(id));
  };

  return (
    <div>
      <ul>
        {varietals.map((item) => (
          <Varietal key={item.id} {...item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default VarietalsList;
