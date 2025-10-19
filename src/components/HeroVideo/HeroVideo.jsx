import styles from "./HeroVideo.module.css";

const HeroVideo = () => {
  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="../../../public/photo/hero_photo.png"
      >
        <source src="/video/winery cut video.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.center}>
        <h1 className={styles.title}>
          Welcome to
          <br />
          WINEVO <br />
          Discover more about wine with us
          <br />
          <br />
          <a className={styles.arrowLink} href="#about">
            <svg
              className={styles.arrow}
              width="80"
              height="40"
              viewBox="0 0 120 61"
            >
              <use href="../../../public/sprite.svg#down-arrow" />
            </svg>
          </a>
        </h1>
      </div>
    </section>
  );
};

export default HeroVideo;
