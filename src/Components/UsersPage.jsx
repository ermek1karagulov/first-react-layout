import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Ermek", firstName: "Karagulov", age: 16 },
  { id: 2, lastName: "Erlan", firstName: "Karagulov", age: 21 },
  { id: 3, lastName: "Abai", firstName: "Karagulov", age: 12 },
  { id: 4, lastName: "Ulan", firstName: "Karagulov", age: 50 },
  { id: 5, lastName: "Manas", firstName: "Ashirkulov", age: 45 },
  { id: 6, lastName: "Bolot", firstName: "Ashirkulov", age: 17 },
  { id: 7, lastName: "Chyngyz", firstName: "qwert", age: 39 },
  { id: 8, lastName: "Ilyas", firstName: "Karagulov", age: 66 },
  { id: 9, lastName: "Amirkhan", firstName: "chyngyz uulu", age: 4 },
];

export default function UsersPage() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
