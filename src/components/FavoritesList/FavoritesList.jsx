import FavoriteWine from "../FavoriteWine/FavoriteWine";

const FavoritesList = ({ favorites }) => {
  if (!Array.isArray(favorites) || favorites.length === 0) {
    return <p>you don`t have any favorites</p>;
  }
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
