import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.heroBackground}>
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

export default Hero;
