import { useState } from "react";
import logo from "../../assets/billboard-printing-1.webp";

const managerColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "username",
    headerName: "User",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={logo} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 160,
  },
  {
    field: "surName",
    headerName: "surname",
    width: 160,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "role_id",
    headerName: "Role",
    width: 160,
  },
];

const productColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "width",
    headerName: "Width m",
    width: 180,
  },
  {
    field: "height",
    headerName: "Height",
    width: 160,
  },
  {
    field: "display_type",
    headerName: "Display type",
    width: 160,
  },
  {
    field: "location_id",
    headerName: "Location",
    width: 160,
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 80,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         <span>{params.row.status}</span>
  //       </div>
  //     );
  //   },
  // },
];

export { productColumns, managerColumns };
