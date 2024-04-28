import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/NavBar";
import DataTable from "../../components/dataTable/DataTable";
import "./list.scss";

const List = ({ title }) => {
  // const title = "MANAGERS LIST";
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar title={title} />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
