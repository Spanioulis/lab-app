import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function BookingList({ bookings }) {
  //console.log(bookings[0].booking.newName);

  function createData(nombre, dni, fechaReserva, lab, material) {
    return { nombre, dni, fechaReserva, lab, material };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    // createData(tableName, 237, 9.0, 37, 4.3),
  ];

  return (
    <>
      {/* <h1>{bookings[0].booking.newName}</h1>
      <h1>{bookings[1].booking.newName}</h1> */}
      {bookings.map((element, i) => {
        console.log(element[i]);
        return <h1 key={element[i]}>tu nombre: {element.booking.newName}</h1>;
      })}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">DNI</StyledTableCell>
              <StyledTableCell align="right">Fecha Reserva</StyledTableCell>
              <StyledTableCell align="right">Laboratorio</StyledTableCell>
              <StyledTableCell align="right">Material</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.nombre}>
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell align="right">{row.dni}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.fechaReserva}
                </StyledTableCell>
                <StyledTableCell align="right">{row.lab}</StyledTableCell>
                <StyledTableCell align="right">{row.material}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BookingList;
