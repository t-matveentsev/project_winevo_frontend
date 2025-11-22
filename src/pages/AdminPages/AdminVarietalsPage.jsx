import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createVarietal,
  deleteVarietalById,
  fetchVarietals,
} from "../../redux/varietal/operations";
import Container from "../../components/Container/Container";
import s from "./AdminShared.module.css";
import { selectVarietals } from "../../redux/varietal/selectors";

const AdminVarietalsPage = () => {
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

  useEffect(() => {
    dispatch(fetchVarietals());
  }, [dispatch]);

  return (
    <div className={s.varietalBackground}>
      <Container>
        <div>
          <div className={s.inputWrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
              <input
                className={s.input}
                type="text"
                placeholder="Varietal name"
                value={varietal}
                onChange={(e) => setVarietal(e.target.value)}
              />
              <button className={s.addBtn} type="submit">
                Add
              </button>
            </form>
          </div>
          <ul className={s.varietalList}>
            {varietals.map((item) => (
              <li className={s.varietalItem} key={item._id}>
                <p>Varietal: {item.varietal}</p>
                <button
                  className={s.deleteBtn}
                  onClick={() => handleDelete(item._id)}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default AdminVarietalsPage;
