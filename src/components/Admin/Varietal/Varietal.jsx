const Varietal = ({ _id, varietal, onDelete }) => {
  return (
    <li>
      <p>Varietal: {varietal}</p>
      <button onClick={() => onDelete(_id)}>delete</button>
    </li>
  );
};

export default Varietal;
