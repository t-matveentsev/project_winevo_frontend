import s from "./HeroVideo.module.css";

const HeroVideo = () => {
  return (
    <section className={s.heroWrapper} id="home">
      <video
        className={s.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="photo/hero_photo.png"
      >
        <source src="/video/winery cut video.mp4" type="video/mp4" />
      </video>
      <div className={s.center}>
        <div className={s.titleWrapper}>
          <h1 className={s.title}>Welcome to our wine collection</h1>
          <h2 className={s.subtitle}>
            Discover the world of fine wine with us
          </h2>
          <a className={s.arrowLink} href="#about">
            <svg className={s.arrow}>
              <use href="sprite.svg#down-arrow" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
