import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch, useSelector } from "react-redux";
import { selectWines, selectWinesMeta } from "../../redux/wines/selectors";
import { fetchWines } from "../../redux/wines/operations";
import Wine from "../Wine/Wine";
import Container from "../Container/Container";
import useEmblaAutoplay from "../../hooks/useEmblaAutoplay";

import s from "./WineSlider.module.css";

const AUTOPLAY_MS = 3500;

const WineSlider = ({ baseQuery = {} }) => {
  const dispatch = useDispatch();
  const wines = useSelector(selectWines);
  const { loading } = useSelector(selectWinesMeta);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const { start, stop } = useEmblaAutoplay(emblaApi, AUTOPLAY_MS);

  useEffect(() => {
    if (!wines?.length) {
      dispatch(fetchWines({ ...baseQuery, page: 1, append: false }));
    }
  }, [dispatch, baseQuery, wines?.length]);

  if (loading && (!wines || wines.length === 0)) {
    return <div className={s.skeleton}>Loading…</div>;
  }
  if (!wines || wines.length === 0) {
    return <p className={s.empty}>Nothing found</p>;
  }

  return (
    <section className={s.section} aria-label="Wine slider" id="wine-slider">
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2 className={s.title}>
              Featured <span className={s.accent}>Wines</span>
            </h2>
            <div className={s.controls} />
          </div>

          <div
            className={s.embla}
            ref={emblaRef}
            onMouseEnter={stop}
            onMouseLeave={start}
            onFocus={stop}
            onBlur={start}
          >
            <div className={s.card}>
              {wines.map((item) => (
                <div className={s.slide} key={item._id} tabIndex={0}>
                  <Wine {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WineSlider;
