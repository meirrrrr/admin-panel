import "./home.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import TableProduct from "../../components/table/TableProduct";

const Home = ({ mainTitle, sideBarMenu }) => {
  const title = "ADMIN PAGE";

  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar title={title} />
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
