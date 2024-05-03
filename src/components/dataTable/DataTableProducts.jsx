import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import url from "../../url";
import axios from "axios";
import { useEffect, useState } from "react";
import "./dataTable.scss";
import { productColumns } from "./dataSource";
import { useLocation } from "react-router-dom";

const DataTableProducts = () => {
  const [data, setData] = useState([]);

  const token = sessionStorage.getItem("token");
  const apiClient = axios.create({ baseURL: url });
  const location = useLocation();
  const { buttonName } = location.state || {};

  // GET
  useEffect(() => {
    getData();
  }, [buttonName]);

  apiClient.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getData = async () => {
    try {
      const response = await apiClient(`${url}/admin/bill`);
      setData(response);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  //

  // ACTION COLUMN

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 2,
      width: "20",
      height: "150",
      display_type: "LG AMOLED ENEK",
      location_id: "Almaty obl",
      price: "500",
    },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={productColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTableProducts;
