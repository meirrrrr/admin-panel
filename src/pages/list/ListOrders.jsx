import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/NavBar";
import DataTableOrders from "../../components/dataTable/DataTableOrders";
import "./list.scss";

const ListOrders = () => {
  // const title = "MANAGERS LIST";
  // const role = sessionStorage.getItem("role");
  const role = "admin";

  return (
    <div className="list">
      <Sidebar title={role} />
      <div className="listContainer">
        <Navbar title={role} />
        <DataTableOrders />
      </div>
    </div>
  );
};

export default ListOrders;
