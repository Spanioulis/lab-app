// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MaterialTable({ equipment }) {
   // Delete item with quantity === 0
   const index = equipment.findIndex((e) => e.quantity === 0);

   if (index !== -1) {
      equipment.splice(index, 1);
   }

   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
            <TableHead>
               <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right">Unidades</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {equipment.map((e) => (
                  <TableRow key={e.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        {e.name}
                     </TableCell>
                     <TableCell align="right">{e.quantity}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}

export default MaterialTable;
