import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import HeroVideo from "../HeroVideo/HeroVideo";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
