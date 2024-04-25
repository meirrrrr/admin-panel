import "./navbar.scss";

const NavBar = ({ title = "ADMIN PAGE" }) => {
  return <div className="navbar">{title}</div>;
};

export default NavBar;
