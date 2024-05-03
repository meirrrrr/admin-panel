import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/NavBar";
import DataTableProducts from "../../components/dataTable/DataTableProducts";
import "./list.scss";

const ListProducts = () => {
  // const title = "MANAGERS LIST";
  // const role = sessionStorage.getItem("role");
  const role = "admin";

  return (
    <div className="list">
      <Sidebar title={role} />
      <div className="listContainer">
        <Navbar title={role} />
        <DataTableProducts />
      </div>
    </div>
  );
};

export default ListProducts;
