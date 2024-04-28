import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import url from "../../url";
import axios from "axios";
import { useEffect, useState } from "react";
import "./dataTable.scss";
import logo from "../../assets/billboard-printing-1.webp";

const DataTable = () => {
  const [products, setProducts] = useState([]);
  const token = sessionStorage.getItem("token");
  const apiClient = axios.create({ baseURL: url });

  useEffect(() => {
    getProducts();
  });

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

  const getProducts = async () => {
    try {
      const response = await apiClient(`${url}/admin/bill`);
      setProducts(response);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={logo} alt="logo" />
          </div>
        );
      },
    },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      width: 80,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 80,
    },
    {
      field: "fullName",
      headerName: "Full name",
      width: 80,
    },
    {
      field: "fullName",
      headerName: "Full name",
      width: 160,
    },
    {
      field: "fullName",
      headerName: "Full name",
      width: 160,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={columns}
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

export default DataTable;
