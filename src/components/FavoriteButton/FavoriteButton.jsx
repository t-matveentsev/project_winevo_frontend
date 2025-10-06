// import { useDispatch, useSelector } from "react-redux";
// import { addFavorite, removeFavorite } from "../../redux/favorites/operations";
// import { makeSelectIsFavorite } from "../../redux/favorites/selectors";
// import { useState } from "react";

// const FavoriteButton = ({ wineId }) => {
//   const dispatch = useDispatch();
//   const isFavorite = useSelector(makeSelectIsFavorite(wineId));
//   const [pending, setPending] = useState(false);

//   const onToggle = async () => {
//     if (pending) return;
//     setPending(true);
//     try {
//       if (isFavorite) {
//         await dispatch(removeFavorite(wineId)).unwrap();
//       } else {
//         await dispatch(addFavorite(wineId)).unwrap();
//       }
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setPending(false);
//     }
//   };

//   return (
//     <button onClick={onToggle} disabled={pending}>
//       {pending ? "..." : isFavorite ? "★ In favorites" : "☆ Add to favorites"}
//     </button>
//   );
// };

// export default FavoriteButton;

const FavoriteButton = () => {
  return <button>add to favorite</button>;
};

export default FavoriteButton;
