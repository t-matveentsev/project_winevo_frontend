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
        <source
          src="/video/hero-mob.webm"
          type="video/webm"
          media="(max-width: 767px)"
        />
        <source
          src="/video/hero-tab.webm"
          type="video/webm"
          media="(max-width: 1279px)"
        />
        <source src="/video/hero-desc.webm" type="video/webm" />

        <source
          src="/video/hero-mob.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source
          src="/video/hero-tab.mp4"
          type="video/mp4"
          media="(max-width: 1279px)"
        />
        <source src="/video/hero-desc.mp4" type="video/mp4" />
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
