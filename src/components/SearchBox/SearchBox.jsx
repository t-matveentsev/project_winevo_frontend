import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWines } from "../../redux/wines/operations";
import Container from "../Container/Container";

import s from "./SearchBox.module.css";

const SearchBox = ({ extraFilters = {}, query = "", onQueryChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      const trimmed = query.trim();
      onQueryChange?.(trimmed);
      dispatch(fetchWines({ ...extraFilters, query: trimmed, page: 1 }));
    }, 500);

    return () => clearTimeout(id);
  }, [query, dispatch, extraFilters, onQueryChange]);

  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.searchWrapper}>
          <p className={s.text}>Here you’ll find your wine. </p>
          <input
            className={s.searchInput}
            name="search"
            type="text"
            placeholder="Enter search query"
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
          />
        </div>
      </Container>
    </section>
  );
};

export default SearchBox;
