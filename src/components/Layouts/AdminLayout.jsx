import { Outlet } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader/AdminHeader";
import Container from "../Container/Container";

const AdminLayout = () => {
  return (
    <Container>
      <AdminHeader />
      <Outlet />
    </Container>
  );
};

export default AdminLayout;
