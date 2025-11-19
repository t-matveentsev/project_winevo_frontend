import Container from "../../Container/Container";
import AdminNavigation from "../AdminNavigation/AdminNavigation";

import s from "./AdminHeader.module.css";

const AdminHeader = () => {
  return (
    <div className={s.adminHeaderBackground}>
      <Container>
        <div className={s.wrapper}>
          <AdminNavigation />
          <div className={s.brand}>
            <a href="/home">WINEVO</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminHeader;
