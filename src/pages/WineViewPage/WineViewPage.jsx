import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getWineById } from "../../redux/wines/operations";
import WineDetails from "../../components/WineDetails/WineDetails";

const WineViewPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [wine, setWine] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const data = await dispatch(getWineById(id)).unwrap();
        setWine(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWine();
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (!wine) return <p>Wine not found.</p>;

  return (
    <div>
      <WineDetails wine={wine} />
    </div>
  );
};

export default WineViewPage;
