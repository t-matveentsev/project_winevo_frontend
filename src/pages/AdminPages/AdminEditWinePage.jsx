import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWines } from "../../redux/wines/selectors";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import WineForm from "../../components/Admin/WineForm/WineForm";

import s from "./AdminShared.module.css";

const AdminWinePage = () => {
  const { id } = useParams();
  const wines = useSelector(selectWines);
  const wine = wines.find((item) => item._id === id);

  if (!wine) {
    return <Loader />;
  }
  return (
    <section className={s.createWineBack}>
      <Container>
        <WineForm wine={wine} />
      </Container>
    </section>
  );
};

export default AdminWinePage;
