import { useEffect } from "react";
import { fetchTypes } from "../../redux/type/operations";
import { fetchVarietals } from "../../redux/varietal/operations";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";
import WineForm from "../../components/Admin/WineForm/WineForm";

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
        <WineForm />
      </Container>
    </div>
  );
};

export default AdminCreateWinePage;
