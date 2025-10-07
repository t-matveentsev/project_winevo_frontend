import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const WineDetails = ({ wine }) => {
  return (
    <div>
      <div>
        <Link to="/home">Back to Home</Link>
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
