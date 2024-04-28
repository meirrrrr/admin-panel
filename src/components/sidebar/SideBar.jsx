import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar = ({
  title = "Admin",
  buttons = [
    { name: "Home", icon: <DashboardIcon /> },
    { name: "Managers", icon: <AccountBoxIcon /> },
    { name: "Products", icon: <ShoppingBasketIcon /> },
    { name: "Orders", icon: <HomeRepairServiceIcon /> },
    { name: "Logout", icon: <LogoutIcon /> },
  ],
}) => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">{title}</span>
      </div>
      <hr />
      <div className="center">
        <p className="title">MAIN</p>
        <ul>
          {buttons.map((button) => {
            // тут на li просто надо сделать redirect. и путь сделать admin/${button.name.lower}
            // onClick={() => navigate(path)}
            return (
              <li key={button.name}>
                <div className="icon">
                  {button.name === "Products" ? (
                    <ShoppingBasketIcon />
                  ) : button.name === "Orders" ? (
                    <HomeRepairServiceIcon />
                  ) : (
                    button.icon
                  )}
                </div>
                <span>{button.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default SideBar;
