import { useDispatch, useSelector } from "react-redux";
import {
  createType,
  deleteTypeById,
  fetchTypes,
} from "../../redux/type/operations";
import { useEffect, useState } from "react";
import { selectTypes } from "../../redux/type/selectors";
import Container from "../../components/Container/Container";

import s from "./AdminShared.module.css";

const AdminTypesPage = () => {
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

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);
  return (
    <div className={s.typeBackground}>
      <Container>
        <div>
          <div className={s.inputWrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
              <input
                className={s.input}
                type="text"
                placeholder="Type name"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <button className={s.addBtn} type="submit">
                Add
              </button>
            </form>
          </div>
          <ul className={s.typeList}>
            {types.map((item) => (
              <li className={s.typeItem} key={item._id}>
                <p>Type: {item.type}</p>
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

export default AdminTypesPage;
