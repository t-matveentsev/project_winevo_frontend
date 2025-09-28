import { Outlet } from "react-router-dom";
import Container from "../Container/Container";

const PrivateLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default PrivateLayout;
