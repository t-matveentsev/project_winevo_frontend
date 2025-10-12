import { fetchWines } from "../../redux/wines/operations";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import Filters from "../../components/Filters/Filters";
import WinesList from "../../components/WinesList/WinesList";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchWines({ page: 1, perPage: 10 }));
  }, [dispatch]);
  const baseQuery = { ...filters, ...(query ? { query } : {}) };

  return (
    <div>
      <SearchBox extraFilters={filters} onQueryChange={setQuery} />
      <Filters onFiltersChange={setFilters} />
      <WinesList admin baseQuery={baseQuery} />
    </div>
  );
};

export default AdminHomePage;
