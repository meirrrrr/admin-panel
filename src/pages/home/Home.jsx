import "./home.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import TableProduct from "../../components/table/TableProduct";

const Home = () => {
  // role взять с session storage
  const role = "admin";

  return (
    <div className="home">
      <SideBar title={role} />
      <div className="homeContainer">
        <NavBar title={role} />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            <div className="listTitle">Last added products</div>
            <TableProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
