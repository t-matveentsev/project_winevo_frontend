import { useDispatch } from "react-redux";
import WineList from "../../components/WinesList/WinesList";
import { useEffect } from "react";
import { fetchWines } from "../../redux/wines/operations";

const HomePage = () => {
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
export default HomePage;
