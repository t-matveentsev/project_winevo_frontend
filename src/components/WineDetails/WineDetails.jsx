import { Link, useLocation } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const WineDetails = ({ wine }) => {
  const location = useLocation();
  const isAdmin = Boolean(location.state?.admin);
  const backPath = location.state?.from || (isAdmin ? "/admin" : "/home");

  return (
    <div>
      <div>
        <Link to={backPath}>Back to collection</Link>
      </div>
      <div>
        <h2>{wine.title}</h2>
        <img src={wine.thumb} alt={wine.title} width={250} />
        <p>
          <strong>Type:</strong> {wine.type}
        </p>
        <p>
          <strong>Country:</strong> {wine.country}
        </p>
        <p>
          <strong>Region:</strong> {wine.region}
        </p>
        <p>
          <strong>Winery:</strong> {wine.winery}
        </p>
        <p>
          <strong>Varietals:</strong> {wine.varietal.join(", ")}
        </p>
        <p>
          <strong>Year:</strong> {wine.year}
        </p>
        <p>
          <strong>Description:</strong> {wine.description}
        </p>
        <FavoriteButton wineId={wine._id} />
      </div>
    </div>
  );
};

export default WineDetails;
