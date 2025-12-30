import { NavLink } from "react-router-dom";

export function SideNav() {
  return (
    <aside className="sidenav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/cabinet">Cabinet Editor</NavLink>
      <NavLink to="/cutlist">Cut List</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </aside>
  );
}
