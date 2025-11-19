import { useEffect } from "react";
import AddWineForm from "../../components/Admin/AddWineForm/AddWineForm";
import { fetchTypes } from "../../redux/type/operations";
import { fetchVarietals } from "../../redux/varietal/operations";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";

import s from "./AdminShared.module.css";

const AdminCreateWinePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypes());
    dispatch(fetchVarietals());
  }, [dispatch]);

  return (
    <div className={s.createWineBack}>
      <Container>
        <AddWineForm />
      </Container>
    </div>
  );
};

export default AdminCreateWinePage;
