import useEmblaCarousel from "embla-carousel-react";
import s from "./PhotoSlider.module.css";
import useEmblaAutoplay from "../../hooks/useEmblaAutoplay";
import { PHOTOS } from "../../constants/countries";

const AUTOPLAY_MS = 3000;

const PhotoSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const { start, stop } = useEmblaAutoplay(emblaApi, AUTOPLAY_MS);

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
        <div className={s.embla} ref={emblaRef}>
          <div className={s.container}>
            {PHOTOS.map((photo, i) => (
              <div className={s.slide} key={i} tabIndex={0}>
                <div className={s.card}>
                  <picture>
                    <source srcSet={photo.webp} type="image/webp" />
                    <img
                      src={photo.fallback}
                      alt={`Wine photo ${i + 1}`}
                      className={s.img}
                      draggable="false"
                    />
                  </picture>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
