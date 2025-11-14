import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
