import { Outlet, NavLink } from "react-router-dom";
import s from "./AdminShared.module.css";
import Container from "../../components/Container/Container";

export default function AdminContentSettings() {
  return (
    <section className={s.contentSettingsBack}>
      <Container>
        <nav className={s.subNavigation}>
          <NavLink to="types">Types</NavLink>
          <NavLink to="varietals">Varietals</NavLink>
          <NavLink to="create">Create Wine</NavLink>
        </nav>
      </Container>
      <Outlet />
    </section>
  );
}
