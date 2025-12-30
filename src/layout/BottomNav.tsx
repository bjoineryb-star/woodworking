import { NavLink } from "react-router-dom";

export function BottomNav() {
  return (
    <nav className="bottomnav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/cabinet">Cabinet</NavLink>
      <NavLink to="/cutlist">Cut List</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  );
}
