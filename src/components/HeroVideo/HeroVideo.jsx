import s from "./HeroVideo.module.css";

const HeroVideo = () => {
  return (
    <div className={s.heroWrapper}>
      <video
        className={s.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="../../../public/photo/hero_photo.png"
      >
        <source src="/video/winery cut video.mp4" type="video/mp4" />
      </video>
      <div className={s.overlay}></div>
      <div className={s.center}>
        <h1 className={s.title}>
          Welcome to
          <br />
          WINEVO <br />
          Discover more about wine with us
          <br />
          <br />
          <a className={s.arrowLink} href="#about">
            <svg
              className={s.arrow}
              width="80"
              height="40"
              viewBox="0 0 120 61"
            >
              <use href="../../../public/sprite.svg#down-arrow" />
            </svg>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default HeroVideo;
