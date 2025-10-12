import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTypes } from "../../redux/type/selectors";
import { selectVarietals } from "../../redux/varietal/selectors";
import { fetchWines } from "../../redux/wines/operations";
import { COUNTRIES } from "../../constants/countries";
import { fetchVarietals } from "../../redux/varietal/operations";
import { fetchTypes } from "../../redux/type/operations";

const Filters = ({ onFiltersChange }) => {
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

  const apply = () => {
    dispatch(fetchWines({ ...params, page: 1 }));
  };

  const reset = () => {
    setCountry("");
    setType("");
    setVarietal("");
    onFiltersChange?.({});
  };

  return (
    <div>
      <select
        id="country"
        name="country"
        value={country}
        autoComplete="country"
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
        id="type"
        name="type"
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
        id="varietal"
        name="varietal"
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

      <div>
        <button onClick={apply}>Search</button>
        <button onClick={reset} type="button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
