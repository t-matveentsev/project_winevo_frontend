import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const PublicLayout = () => {
  return (
    <>
      <ScrollToTop behavior="smooth" />
      <Header />
      <main role="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
