import AboutUs from "../../components/AboutUs/AboutUs";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import OurTeam from "../../components/OurTeam/OurTeam";
import WineSlider from "../../components/WineSlider/WineSlider";

const HomePage = () => {
  return (
    <>
      <HeroVideo />
      <AboutUs />
      <OurTeam />
      <WineSlider baseQuery={{ sort: "-rating", limit: 12 }} />
    </>
  );
};

export default HomePage;
