import "./table.scss";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import url from "../../url";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";

const TableProduct = () => {
  const [products, setProducts] = useState([]);
  const token = sessionStorage.getItem("token");
  const apiClient = axios.create({ baseURL: url });

  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: "Poppins, sans-serif",
          },
        },
      },
    },
  });

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

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">id</TableCell>
              <TableCell className="tableCell">width</TableCell>
              <TableCell className="tableCell">height</TableCell>
              <TableCell className="tableCell">display type</TableCell>
              <TableCell className="tableCell">price</TableCell>
              <TableCell className="tableCell">location</TableCell>
              <TableCell className="tableCell">actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.product_id}>
                <TableCell align="tableCell">{product.width}м</TableCell>
                <TableCell align="tableCell">{product.height}м</TableCell>
                <TableCell align="tableCell">{product.display_type}</TableCell>
                <TableCell align="tableCell">{product.price}</TableCell>
                <TableCell align="tableCell">{product.location_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default TableProduct;
