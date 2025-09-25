import { Outlet } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader/AdminHeader";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminLayout;
