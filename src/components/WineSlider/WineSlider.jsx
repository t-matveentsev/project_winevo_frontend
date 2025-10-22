import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch, useSelector } from "react-redux";
import { selectWines, selectWinesMeta } from "../../redux/wines/selectors";
import { fetchWines } from "../../redux/wines/operations";
import Wine from "../Wine/wine"; // твоя картка вина
import styles from "./WineSlider.module.css";
import Container from "../Container/Container";

const AUTOPLAY_MS = 3500;

const WineSlider = ({ baseQuery = {} }) => {
  const dispatch = useDispatch();
  const wines = useSelector(selectWines);
  const { loading } = useSelector(selectWinesMeta);

  // 1 слайд за раз, центр, петля
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  // Підтягнути дані, якщо порожньо
  useEffect(() => {
    if (!wines?.length) {
      dispatch(fetchWines({ ...baseQuery, page: 1, append: false }));
    }
  }, [dispatch, baseQuery, wines?.length]);

  // Автоплей (простий таймер)
  const timerRef = useRef(null);
  const start = useCallback(() => {
    stop();
    timerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi]);
  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);
  useEffect(() => {
    if (!emblaApi) return;
    start();
    // зупиняти на наведенні/фокусі
    emblaApi.on("pointerDown", stop);
    emblaApi.on("scroll", () => {}); // тримаємо посилання
    return () => stop();
  }, [emblaApi, start, stop]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  if (loading && (!wines || wines.length === 0)) {
    return <div className={styles.skeleton}>Loading…</div>;
  }
  if (!wines || wines.length === 0) {
    return <p className={styles.empty}>Nothing found</p>;
  }

  return (
    <section className={styles.section} aria-label="Wine slider">
      <Container>
        <div
          className={styles.header}
          onMouseEnter={stop}
          onMouseLeave={start}
          onFocus={stop}
          onBlur={start}
        >
          <h2 className={styles.title}>Featured Wines</h2>
          <div className={styles.controls}>
            <button
              className={styles.ctrl}
              onClick={scrollPrev}
              aria-label="Previous wine"
            >
              ‹
            </button>
            <button
              className={styles.ctrl}
              onClick={scrollNext}
              aria-label="Next wine"
            >
              ›
            </button>
          </div>
        </div>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.container}>
            {wines.map((item) => (
              <div className={styles.slide} key={item._id}>
                {/* Твоя картка. Можеш додати проп admin, onDelete якщо треба */}
                <Wine {...item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WineSlider;
