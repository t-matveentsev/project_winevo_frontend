import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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
  const linkState = admin
    ? { admin: true, from: "/admin/home" }
    : { from: "/home" };

  return (
    <li>
      <p>title: {title}</p>
      <p>country: {country}</p>
      <p>type: {type}</p>
      <p>region: {region}</p>
      <p>winery: {winery}</p>
      <p>
        varietal: {Array.isArray(varietal) ? varietal.join(", ") : varietal}
      </p>
      <p>year: {year}</p>
      <p>description: {description}</p>
      {admin && <button onClick={() => onDelete(_id)}>delete</button>}
      <Link to={`/wine-details/${_id}`} state={linkState}>
        See details
      </Link>
      <FavoriteButton wineId={_id} />
    </li>
  );
};

export default Wine;
