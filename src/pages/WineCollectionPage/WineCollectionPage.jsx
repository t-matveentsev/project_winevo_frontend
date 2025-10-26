import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import SearchBox from "../../components/SearchBox/SearchBox";
import Filters from "../../components/Filters/Filters";
import WinesList from "../../components/WinesList/WinesList";

import { fetchWines } from "../../redux/wines/operations";
import s from "./WineCollectionPage.module.css";

const WineCollectionPage = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchWines({ page: 1, perPage: 10 }));
  }, [dispatch]);

  const baseQuery = { ...filters, ...(query ? { query } : {}) };
  return (
    <section className={s.collectionBackground}>
      <Container>
        <div className={s.wrapper}>
          <h2>Wine collection </h2>
          <p>Here you’ll find your wine. </p>
          <div>
            <SearchBox extraFilters={filters} onQueryChange={setQuery} />
            <Filters onFiltersChange={setFilters} />
            <WinesList baseQuery={baseQuery} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WineCollectionPage;
