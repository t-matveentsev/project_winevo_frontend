import Container from "../../components/Container/Container";
import WineVarietals from "../../components/WineVarieties/WineVarietals";

import s from "./WineVarietalsPage.module.css";

const WineVarietalsPage = () => {
  return (
    <div className={s.grapeBackground}>
      <Container>
        <WineVarietals />
      </Container>
    </div>
  );
};

export default WineVarietalsPage;
