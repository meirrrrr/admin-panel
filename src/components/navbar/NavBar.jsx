import "./navbar.scss";

const NavBar = ({ title }) => {
  return <div className="navbar">{title.toUpperCase()}</div>;
};

export default NavBar;
