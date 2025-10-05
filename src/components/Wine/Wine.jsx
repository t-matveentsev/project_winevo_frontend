import { Link } from "react-router-dom";

const Wine = ({
  _id,
  type,
  title,
  country,
  region,
  winery,
  varietal,
  year,
  description,
  admin = false,
  onDelete,
}) => {
  return (
    <li>
      <p>title: {title}</p>
      <p>country: {country}</p>
      <p>type: {type}</p>
      <p>region: {region}</p>
      <p>winery: {winery}</p>
      {/* <p>{varietal}</p> */}
      <p>
        varietal: {Array.isArray(varietal) ? varietal.join(", ") : varietal}
      </p>
      <p>year: {year}</p>
      <p>description: {description}</p>
      {admin && <button onClick={() => onDelete(_id)}>delete</button>}
      <Link to={`/wine-details/${_id}`}>See details</Link>
    </li>
  );
};

export default Wine;
