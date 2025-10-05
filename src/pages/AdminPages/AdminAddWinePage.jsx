import { useEffect } from "react";
import AddWineForm from "../../components/Admin/AddWineForm/AddWineForm";
import { fetchTypes } from "../../redux/type/operations";
import { fetchVarietals } from "../../redux/varietal/operations";
import { useDispatch } from "react-redux";

const AdminAddWinePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypes());
    dispatch(fetchVarietals());
  }, [dispatch]);

  return (
    <div>
      <AddWineForm />
    </div>
  );
};

export default AdminAddWinePage;
