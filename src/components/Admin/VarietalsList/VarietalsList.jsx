import { useDispatch, useSelector } from "react-redux";
import { selectVarietals } from "../../../redux/varietal/selectors";
import {
  createVarietal,
  deleteVarietalById,
} from "../../../redux/varietal/operations";
import { useState } from "react";

const VarietalsList = () => {
  const dispatch = useDispatch();
  const varietals = useSelector(selectVarietals);

  const [varietal, setVarietal] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteVarietalById(id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createVarietal({ varietal })).unwrap();
      setVarietal("");
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
            placeholder="Varietal name"
            value={varietal}
            onChange={(e) => setVarietal(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <ul>
        {varietals.map((item) => (
          <li key={item._id}>
            <p>Varietal: {item.varietal}</p>
            <button onClick={() => handleDelete(item._id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VarietalsList;
