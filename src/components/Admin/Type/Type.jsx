const Type = ({ _id, type, onDelete }) => {
  return (
    <li>
      <p>Type: {type}</p>
      <button onClick={() => onDelete(_id)}>delete</button>
    </li>
  );
};

export default Type;
