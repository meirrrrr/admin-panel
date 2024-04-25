import "./home.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
