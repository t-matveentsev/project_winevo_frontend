import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import WineForm from "../../components/Admin/WineForm/WineForm";
import s from "./AdminShared.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWineById } from "../../redux/wines/operations";
import { selectCurrentWine } from "../../redux/wines/selectors";

const AdminWinePage = () => {
  const currentWine = useSelector(selectCurrentWine);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getWineById(id));
    }
  }, [dispatch, id]);

  return (
    <section className={s.createWineBack}>
      <Container>
        <WineForm wine={currentWine} />
      </Container>
    </section>
  );
};

export default AdminWinePage;
