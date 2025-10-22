import AboutUs from "../../components/AboutUs/AboutUs";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import OurTeam from "../../components/OurTeam/OurTeam";
import WineSlider from "../../components/WineSlider/WineSlider";

import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <HeroVideo />
      <AboutUs />
      <OurTeam />
      <div className={s.background}>
        <WineSlider baseQuery={{ sort: "-rating", limit: 12 }} />
      </div>
    </>
  );
};

export default HomePage;
