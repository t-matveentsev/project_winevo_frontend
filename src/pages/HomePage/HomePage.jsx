import AboutUs from "../../components/AboutUs/AboutUs";
import Container from "../../components/Container/Container";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import WineSlider from "../../components/WineSlider/WineSlider";

const HomePage = () => {
  return (
    <>
      <HeroVideo />
      <Container>
        <AboutUs />
        <WineSlider baseQuery={{ sort: "-rating", limit: 12 }} />
      </Container>
    </>
  );
};

export default HomePage;
