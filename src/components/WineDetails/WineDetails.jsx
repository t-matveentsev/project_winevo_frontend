import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";

import s from "./WineDetails.module.css";

const WineDetails = ({ wine }) => {
  const varietalText = Array.isArray(wine.varietal)
    ? wine.varietal.join(", ")
    : wine.varietal;

  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <button className={s.backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className={s.wineDetailsWrapper}>
          <h2 className={s.title}>{wine.title}</h2>
          <div className={s.imageInfo}>
            <img
              className={s.wineImg}
              src={wine.thumb}
              alt={wine.title}
              width={250}
            />
            <dl className={s.specs}>
              <div className={s.row}>
                <dt>Type:</dt>
                <dd className={s.value}>{wine.type || "—"}</dd>
              </div>
              <div className={s.row}>
                <dt>Country/Region of origin :</dt>
                <dd className={s.value}>
                  {wine.country || "—"}/{wine.region || "-"}
                </dd>
              </div>
              <div className={s.row}>
                <dt>Winery:</dt>
                <dd className={s.value}>{wine.winery || "—"}</dd>
              </div>
              <div className={s.row}>
                <dt>Varieties:</dt>
                <dd className={s.value}>{varietalText || "—"}</dd>
              </div>
              <div className={s.row}>
                <dt>Vintage:</dt>
                <dd className={s.value}>{wine.year || "—"}</dd>
              </div>
            </dl>
          </div>
          <div className={s.description}>
            <p>{wine.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WineDetails;
