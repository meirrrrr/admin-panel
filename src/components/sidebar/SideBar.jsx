import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const SideBar = ({
  title = "Admin",
  buttons = [
    { name: "Home", icon: <DashboardIcon /> },
    { name: "Managers", icon: <AccountBoxIcon /> },
    { name: "Products", icon: <ShoppingBasketIcon /> },
    { name: "Orders", icon: <HomeRepairServiceIcon /> },
  ],
}) => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">{title}</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {buttons.map((button) => (
            <li key={button}>
              {button.icon}
              <span>{button.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default SideBar;
