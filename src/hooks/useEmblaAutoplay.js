import { useRef, useCallback, useEffect, useState } from "react";

/**
 * @param {object|null} emblaApi - what return useEmblaCarousel()[1]
 * @param {number} delay - interval sec
 */
export default function useEmblaAutoplay(emblaApi, delay = 3000) {
  const timerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const start = useCallback(() => {
    stop();
    timerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, delay);
  }, [emblaApi, delay, stop]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    start();
    return () => stop();
  }, [emblaApi, onSelect, start, stop]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (i) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi]
  );

  return { start, stop, selectedIndex, scrollPrev, scrollNext, scrollTo };
}
