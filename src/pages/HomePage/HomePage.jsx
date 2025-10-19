import AboutUs from "../../components/AboutUs/AboutUs";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import WineSlider from "../../components/WineSlider/WineSlider";

const HomePage = () => {
  return (
    <>
      <HeroVideo />
      <AboutUs />
      <WineSlider baseQuery={{ sort: "-rating", limit: 12 }} />
    </>
  );
};

export default HomePage;
