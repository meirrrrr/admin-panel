import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LogoutIcon from "@mui/icons-material/Logout";

const adminButtons = [
  { name: "Home", icon: <DashboardIcon /> },
  { name: "Managers", icon: <AccountBoxIcon /> },
  { name: "Products", icon: <ShoppingBasketIcon /> },
  { name: "Orders", icon: <HomeRepairServiceIcon /> },
  { name: "Logout", icon: <LogoutIcon /> },
];

const managerButtons = [
  { name: "Home", icon: <DashboardIcon /> },
  { name: "Products", icon: <ShoppingBasketIcon /> },
  { name: "Orders", icon: <HomeRepairServiceIcon /> },
  { name: "Logout", icon: <LogoutIcon /> },
];

export { adminButtons, managerButtons };
