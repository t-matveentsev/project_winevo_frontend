import { Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";

const AdminLayout = () => {
  return (
    <Container>
      <AdminHeader />
      <Outlet />
    </Container>
  );
};

export default AdminLayout;
