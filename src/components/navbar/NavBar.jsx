import "./navbar.scss";
import { useLocation, Link } from "react-router-dom";

const NavBar = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);

  return (
    <div className="navbar">
      <div className="links">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          console.log(routeTo);
          const isLast = index === pathnames.length - 1;
          return (
            <span key={index} className="navbar-link">
              <Link to={routeTo}>{name}</Link>
              {!isLast && " / "}
            </span>
          );
        })}
      </div>
      <div className="title">{title.toUpperCase()}</div>
    </div>
  );
};

export default NavBar;
