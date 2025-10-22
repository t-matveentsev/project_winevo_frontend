import { useEffect, useState } from "react";
import { fetchWines } from "../../redux/wines/operations";
import { useDispatch } from "react-redux";
import SearchBox from "../SearchBox/SearchBox";
import Filters from "../Filters/Filters";
import WinesList from "../WinesList/WinesList";

import s from "./WineCollection.module.css";

const WineCollection = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchWines({ page: 1, perPage: 10 }));
  }, [dispatch]);

  const baseQuery = { ...filters, ...(query ? { query } : {}) };
  return (
    <div className={s.wrapper}>
      <h2>Wine collection </h2>
      <p>Here you’ll find your wine. </p>
      <div>
        <SearchBox extraFilters={filters} onQueryChange={setQuery} />
        <Filters onFiltersChange={setFilters} />
        <WinesList baseQuery={baseQuery} />
      </div>
    </div>
  );
};

export default WineCollection;
