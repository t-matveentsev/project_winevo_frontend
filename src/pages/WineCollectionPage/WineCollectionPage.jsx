import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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

  const handleReset = () => {
    setFilters({});
    setQuery("");
    dispatch(fetchWines({ page: 1, perPage: 10 }));
  };

  return (
    <>
      <div className={s.collectionBackground}>
        <SearchBox
          extraFilters={filters}
          query={query}
          onQueryChange={setQuery}
        />
        <Filters onFiltersChange={setFilters} onReset={handleReset} />
      </div>
      <WinesList baseQuery={baseQuery} />
    </>
  );
};

export default WineCollectionPage;
