import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/NavBar";
import { useLocation } from "react-router-dom";
import DataTableManagers from "../../components/dataTable/DataTableManagers";
import "./list.scss";

const ListManagers = () => {
  // const title = "MANAGERS LIST";
  // const role = sessionStorage.getItem("role");
  const role = "manager";

  return (
    <div className="list">
      <Sidebar title={role} />
      <div className="listContainer">
        <Navbar title={role} />
        <DataTableManagers />
      </div>
    </div>
  );
};

export default ListManagers;
