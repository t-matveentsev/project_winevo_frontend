import Container from "../Container/Container";

import s from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={s.aboutUsSection} id="about">
      <Container>
        <h2 className={s.title}>
          About <span className={s.accent}>us</span>
        </h2>
        <div className={s.wrapper}>
          <div>
            <img
              className={s.teamImg}
              src="photo/about_us_photo.jpg"
              alt="team"
            />
          </div>
          <div>
            <p className={s.sectionText}>
              Hi there! We’re the team of waiters from Panska 85 Restaurant. On
              this website, we’d love to show you the wines we have in our
              collection and share a bit more about the wonderful world of wine.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
