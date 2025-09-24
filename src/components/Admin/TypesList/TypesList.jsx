import { useDispatch, useSelector } from "react-redux";
import { selectTypes } from "../../../redux/type/selectors";
import Type from "../Type/Type";
import { deleteTypeById } from "../../../redux/type/operations";

const TypesList = () => {
  const dispatch = useDispatch();
  const types = useSelector(selectTypes);

  const handleDelete = (id) => {
    dispatch(deleteTypeById(id));
  };
  return (
    <div>
      <ul>
        {types.map((item) => (
          <Type key={item._id} {...item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TypesList;
