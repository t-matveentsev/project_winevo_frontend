import Container from "../../components/Container/Container";
import WineCollection from "../../components/WineCollection/WineCollection";

import s from "./WineCollectionPage.module.css";

const WineCollectionPage = () => {
  return (
    <div className={s.collectionBackground}>
      <Container>
        <WineCollection />
      </Container>
    </div>
  );
};

export default WineCollectionPage;
