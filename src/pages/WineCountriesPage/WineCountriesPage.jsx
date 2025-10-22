import Container from "../../components/Container/Container";
import WineCountries from "../../components/WineCountries/WineCountries";

import s from "./WineCountriesPage.module.css";

const WineCountriesPage = () => {
  return (
    <div className={s.countriesBackground}>
      <Container>
        <WineCountries allowMultiple allowCollapseAll showExpandControls />
      </Container>
    </div>
  );
};

export default WineCountriesPage;
