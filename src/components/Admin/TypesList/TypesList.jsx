import { useDispatch, useSelector } from "react-redux";
import { selectTypes } from "../../../redux/type/selectors";
import { createType, deleteTypeById } from "../../../redux/type/operations";
import { useState } from "react";

const TypesList = () => {
  const dispatch = useDispatch();
  const types = useSelector(selectTypes);

  const [type, setType] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTypeById(id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createType({ type })).unwrap();
      setType("");
    } catch (err) {
      console.error("Error creating varietal:", err);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type name"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <ul>
        {types.map((item) => (
          <li key={item._id}>
            <p>Type: {item.type}</p>
            <button onClick={() => handleDelete(item._id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypesList;
