import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWines } from "../../redux/wines/operations";

const SearchBox = ({ extraFilters = {}, onQueryChange }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      const query = value.trim();
      onQueryChange?.(query);
      dispatch(fetchWines({ ...extraFilters, query, page: 1 }));
    }, 1000);
    return () => clearTimeout(id);
  }, [value, dispatch, extraFilters, onQueryChange]);

  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder="Enter search query"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
