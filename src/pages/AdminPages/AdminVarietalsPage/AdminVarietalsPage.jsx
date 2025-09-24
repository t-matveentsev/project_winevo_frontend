import { useDispatch } from "react-redux";
import VarietalsList from "../../../components/Admin/VarietalsList/VarietalsList";
import { useEffect } from "react";
import { fetchVarietals } from "../../../redux/varietal/operations";

const AdminVarietalsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVarietals());
  }, [dispatch]);
  return (
    <div>
      <VarietalsList />
    </div>
  );
};

export default AdminVarietalsPage;
