import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import Footer from "../components/Footer/Footer";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <main role="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AdminLayout;
