import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getWineById } from "../../redux/wines/operations";
import WineDetails from "../../components/WineDetails/WineDetails";

import s from "./WineViewPage.module.css";

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
    <section className={s.wineDetailsBack}>
      <WineDetails wine={wine} />
    </section>
  );
};

export default WineViewPage;
