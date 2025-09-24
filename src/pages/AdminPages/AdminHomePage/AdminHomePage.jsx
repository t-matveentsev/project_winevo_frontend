import { fetchWines } from "../../../redux/wines/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import WineList from "../../../components/WineList/WineList";

const AdminPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWines());
  }, [dispatch]);
  return (
    <div>
      <WineList admin />
    </div>
  );
};

export default AdminPage;
