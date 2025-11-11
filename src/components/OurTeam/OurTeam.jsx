import Container from "../Container/Container";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import s from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <section className={s.ourTeamSection} id="team">
      <Container>
        <h2 className={s.title}>
          Our <span className={s.accent}>Team</span>
        </h2>
        <p className={s.text}>
          Of course, it's not just about wine, but work, our team works side by
          side every day at work to give each of our guests in the restaurant a
          truly unforgettable experience. Yes, exactly the guests, have you ever
          wondered why we call you guests?! How could you have guessed, because
          we are a small family that welcomes you to our home!
        </p>
        <PhotoSlider />
      </Container>
    </section>
  );
};

export default OurTeam;
