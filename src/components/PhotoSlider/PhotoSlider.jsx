import useEmblaCarousel from "embla-carousel-react";
import s from "./PhotoSlider.module.css";
import useEmblaAutoplay from "../../hooks/useEmblaAutoplay";
import { PHOTOS } from "../../constants/countries";

const AUTOPLAY_MS = 3000;

const PhotoSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const { start, stop, scrollPrev, scrollNext } = useEmblaAutoplay(
    emblaApi,
    AUTOPLAY_MS
  );

  if (!PHOTOS.length) return null;

  return (
    <div className={s.root}>
      <div
        className={s.wrap}
        onMouseEnter={stop}
        onMouseLeave={start}
        onFocus={stop}
        onBlur={start}
      >
        <button
          className={`${s.nav} ${s.prev}`}
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" className={s.icon}>
            <path
              d="M15 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={s.embla} ref={emblaRef}>
          <div className={s.container}>
            {PHOTOS.map((src, i) => (
              <div className={s.slide} key={i}>
                <div className={s.card}>
                  <img
                    src={src}
                    alt={`Team photo ${i + 1}`}
                    className={s.img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${s.nav} ${s.next}`}
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" className={s.icon}>
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoSlider;
