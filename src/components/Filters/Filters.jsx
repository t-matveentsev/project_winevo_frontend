import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTypes } from "../../redux/type/selectors";
import { selectVarietals } from "../../redux/varietal/selectors";
import { COUNTRIES } from "../../constants/countries";
import { fetchVarietals } from "../../redux/varietal/operations";
import { fetchTypes } from "../../redux/type/operations";
import Container from "../Container/Container";

import s from "./Filters.module.css";

const Filters = ({ onFiltersChange, onReset }) => {
  const dispatch = useDispatch();
  const types = useSelector(selectTypes);
  const varietals = useSelector(selectVarietals);

  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [varietal, setVarietal] = useState("");

  const params = useMemo(() => {
    const p = {};
    if (country) p.country = country;
    if (type) p.type = type;
    if (varietal) p.varietal = varietal;
    return p;
  }, [country, type, varietal]);

  useEffect(() => {
    dispatch(fetchTypes()),
      dispatch(fetchVarietals()),
      onFiltersChange?.(params);
  }, [params, onFiltersChange, dispatch]);

  const reset = () => {
    setCountry("");
    setType("");
    setVarietal("");
    onFiltersChange?.({});
    onReset?.();
  };

  return (
    <section className={s.background}>
      <Container>
        <div className={s.filterWrapper}>
          <div className={s.selectedContainer}>
            <select
              className={s.select}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {COUNTRIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              className={s.select}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Type</option>
              {types.map(({ _id, type }) => (
                <option key={_id} value={_id}>
                  {type}
                </option>
              ))}
            </select>

            <select
              className={s.select}
              value={varietal}
              onChange={(e) => setVarietal(e.target.value)}
            >
              <option value="">Varietal</option>
              {varietals.map(({ _id, varietal }) => (
                <option key={_id} value={_id}>
                  {varietal}
                </option>
              ))}
            </select>
          </div>

          <div>
            {/* <button className={`${s.btn} ${s.btnPrimary}`} onClick={apply}>
              Search
            </button> */}
            <button className={s.btn} onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Filters;
