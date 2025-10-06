import FavoriteWine from "../FavoriteWine/FavoriteWine";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <ul>
        {favorites.map((item) => (
          <FavoriteWine key={item._id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
