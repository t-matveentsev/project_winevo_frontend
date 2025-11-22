import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import s from "./Wine.module.css";

const Wine = ({
  _id,
  thumb,
  type,
  title,
  country,
  region,
  winery,
  varietal,
  year,
  admin = false,
  onDelete,
}) => {
  const linkState = admin
    ? { admin: true, from: "/admin/home" }
    : { from: "/home" };

  const varietalText = Array.isArray(varietal) ? varietal.join(", ") : varietal;

  return (
    <li className={s.wineCard}>
      <div className={s.cardWrapper}>
        <div className={s.wineMedia}>
          <img className={s.wineImg} src={thumb} alt={title} />
        </div>
        <div className={s.details}>
          <div className={s.cardHeadWrapper}>
            <h2 className={s.title}>{title}</h2>
            <div className={s.cardBtn}>
              {admin ? (
                <div className={s.adminBtnWrapper}>
                  <button className={s.deleteBtn} onClick={() => onDelete(_id)}>
                    Delete
                  </button>
                  {/* <button className={s.editBtn}>Edit</button> */}
                </div>
              ) : (
                <FavoriteButton wineId={_id} />
              )}
            </div>
          </div>
          <dl className={s.specs}>
            <div className={s.row}>
              <dt>Type:</dt>
              <dd className={s.value}>{type || "—"}</dd>
            </div>
            <div className={s.row}>
              <dt>Country/Region of origin :</dt>
              <dd className={s.value}>
                {country || "—"}/{region || "-"}
              </dd>
            </div>
            <div className={s.row}>
              <dt>Winery:</dt>
              <dd className={s.value}>{winery || "—"}</dd>
            </div>
            <div className={s.row}>
              <dt>Grape variety / varieties::</dt>
              <dd className={s.value}>{varietalText || "—"}</dd>
            </div>
            <div className={s.row}>
              <dt>Vintage:</dt>
              <dd className={s.value}>{year || "—"}</dd>
            </div>
            <Link
              className={s.cta}
              to={`/wine-details/${_id}`}
              state={linkState}
            >
              See details
            </Link>
          </dl>
        </div>
      </div>
    </li>
  );
};

export default Wine;
