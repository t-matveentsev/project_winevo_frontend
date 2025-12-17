import AboutUs from "../../components/AboutUs/AboutUs";
import Hero from "../../components/Hero/Hero";
import OurTeam from "../../components/OurTeam/OurTeam";
import WineSlider from "../../components/WineSlider/WineSlider";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurTeam />
      {/* <WineSlider baseQuery={{ sort: "-rating", limit: 20 }} /> */}
    </>
  );
};

export default HomePage;
