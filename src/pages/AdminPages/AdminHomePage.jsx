import { fetchWines } from "../../redux/wines/operations";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import Filters from "../../components/Filters/Filters";
import WinesList from "../../components/WinesList/WinesList";

import s from "./AdminShared.module.css";

const AdminHomePage = () => {
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
      <div className={s.homeBackground}>
        <SearchBox
          extraFilters={filters}
          query={query}
          onQueryChange={setQuery}
        />
        <Filters onFiltersChange={setFilters} onReset={handleReset} />
      </div>
      <WinesList admin baseQuery={baseQuery} />
    </>
  );
};

export default AdminHomePage;
