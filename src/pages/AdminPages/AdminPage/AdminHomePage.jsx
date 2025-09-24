import AdminHeader from "../../../components/Admin/AdminHeader/AdminHeader";
import { fetchWines } from "../../../redux/wines/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import WineList from "../../../components/WinesList/WineList";

const AdminPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWines());
  }, [dispatch]);
  return (
    <div>
      <WineList />
    </div>
  );
};

export default AdminPage;
