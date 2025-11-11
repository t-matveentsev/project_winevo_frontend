import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWines } from "../../redux/wines/operations";
import Container from "../Container/Container";

import s from "./SearchBox.module.css";

const SearchBox = ({ extraFilters = {}, onQueryChange }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      const query = value.trim();
      onQueryChange?.(query);
      dispatch(fetchWines({ ...extraFilters, query, page: 1 }));
    }, 700);
    return () => clearTimeout(id);
  }, [value, dispatch, extraFilters, onQueryChange]);

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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </Container>
    </section>
  );
};

export default SearchBox;
