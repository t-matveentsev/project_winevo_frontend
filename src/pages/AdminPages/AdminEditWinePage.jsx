import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";

import s from "./AdminShared.module.css";
import EditWineForm from "../../components/Admin/EditWineForm/EditWineForm";
import { useSelector } from "react-redux";
import { selectWines } from "../../redux/wines/selectors";

const AdminEditWinePage = () => {
  const { id } = useParams();
  const wines = useSelector(selectWines);
  const wine = wines.find((item) => item._id === id);

  console.log(wine);

  if (!wine) {
    return <p>Loading...</p>;
  }
  return (
    <section className={s.createWineBack}>
      <Container>
        <EditWineForm wine={wine} />
      </Container>
    </section>
  );
};

export default AdminEditWinePage;
