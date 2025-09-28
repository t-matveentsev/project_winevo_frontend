import { useDispatch } from "react-redux";
import TypesList from "../../components/Admin/TypesList/TypesList";
import { fetchTypes } from "../../redux/type/operations";
import { useEffect } from "react";

const AdminTypesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);
  return (
    <div>
      <TypesList />
    </div>
  );
};

export default AdminTypesPage;
