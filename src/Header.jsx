import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ display: "flex" }}>
      <NavLink to="/" style={{ marginLeft: "20px" }}>
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/movie" style={{ marginLeft: "20px" }}>
        <h2>Electronics</h2>
      </NavLink>
    </nav>
  );
};

export default Header;
