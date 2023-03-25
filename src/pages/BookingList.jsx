import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14
   }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
   },
   // hide last border
   '&:last-child td, &:last-child th': {
      border: 0
   }
}));

function BookingList({ bookings }) {
   console.log('bookings:', bookings);
   return (
      <>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700, mt: 5 }} aria-label="customized table">
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
                  {bookings.map((element, i) => (
                     <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                           {element.booking.newName}
                        </StyledTableCell>
                        <StyledTableCell align="right">{element.booking.newId}</StyledTableCell>
                        <StyledTableCell align="right">{element.date.$d.toDateString()}</StyledTableCell>
                        <StyledTableCell align="right">{element.booking.newLab}</StyledTableCell>
                        <StyledTableCell align="right">
                           {element.equipment.map((element, i) => (
                              <>
                                 <p>
                                    {element.name} / Unidades: {element.quantity} / Ref: {element.id}
                                 </p>
                              </>
                           ))}
                        </StyledTableCell>
                     </StyledTableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </>
   );
}

export default BookingList;
