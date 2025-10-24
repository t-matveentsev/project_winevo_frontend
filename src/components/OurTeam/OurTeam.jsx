import Container from "../Container/Container";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import s from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <section className={s.ourTeamSection}>
      <Container>
        <h2 className={s.title}>
          Our <span className={s.accent}>Team</span>
        </h2>

        <div className={s.wrapper}>
          <PhotoSlider />
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
