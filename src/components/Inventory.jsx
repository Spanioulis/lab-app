import { Table, TableCell, TableHead, TableRow } from '@mui/material';

const Inventory = ({ data, localData, handleAddSub }) => {
   console.log('data:', data);
   console.log('localData:', localData);
   const byName = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

   return (
      <div className="flex flex-col">
         <h1 className="mb-2 text-center text-xl font-semibold text-blue-800">Stock actual</h1>
         <div className="h-96 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            {/* <TableContainer component={Paper}>
               <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
                  <TableHead>
                     <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Stock</TableCell>
                        <TableCell align="right">Formato</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {localData.sort(byName).map((d) => (
                        <TableRow key={d.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                           <TableCell>
                              {' '}
                              <button onClick={(e) => handleAddSub(d.id, e)} value={d.quantity} name={d.name} id="add">
                                 +
                              </button>
                           </TableCell>
                           <TableCell>
                              <button onClick={(e) => handleAddSub(d.id, e)} value={d.quantity} name={d.name} id="sub">
                                 -
                              </button>
                           </TableCell>
                           <TableCell component="th" scope="row">
                              {d.name}
                           </TableCell>
                           <TableCell align="right">{d.quantity}</TableCell>
                           <TableCell align="right">{d.format}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer> */}
            <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
               <TableHead>
                  <TableRow>
                     <TableCell></TableCell>
                     <TableCell></TableCell>
                     <TableCell></TableCell>
                     <TableCell>Nombre</TableCell>
                     <TableCell align="right">Stock</TableCell>
                     <TableCell align="right">Formato</TableCell>
                  </TableRow>
               </TableHead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {localData.sort(byName).map((d) => (
                     <tr key={d.id}>
                        <td className="whitespace-nowrap px-3 py-2 text-gray-700 dark:text-gray-200">
                           <button
                              onClick={(e) => handleAddSub(d.id, e)}
                              value={d.quantity}
                              name={d.name}
                              id="add"
                              disabled={d.quantity === 0}
                           >
                              +
                           </button>
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-gray-700 dark:text-gray-200">
                           <button onClick={(e) => handleAddSub(d.id, e)} value={d.quantity} name={d.name} id="sub">
                              -
                           </button>
                        </td>
                        <td>
                           <img
                              src={import.meta.resolve(`../assets/images/${d?.img}.png`)}
                              style={{
                                 borderRadius: '10px',
                                 margin: '0.2rem',
                                 maxWidth: '75px',
                                 maxHeight: '75px'
                              }}
                           />
                        </td>
                        <td
                           className={
                              d.quantity !== 0
                                 ? 'whitespace-nowrap px-4 py-2 font-normal text-gray-900 dark:text-white'
                                 : 'whitespace-nowrap px-4 py-2 font-bold text-red-700 dark:text-white'
                           }
                        >
                           {d.name}
                        </td>
                        <td
                           className={
                              d.quantity !== 0
                                 ? 'whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-gray-200'
                                 : 'whitespace-nowrap px-4 py-2 text-center font-bold text-red-700 dark:text-gray-200'
                           }
                        >
                           {d.quantity}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{d.format}</td>
                     </tr>
                  ))}
               </tbody>
               {/* </table> */}
            </Table>
         </div>
      </div>
   );
};

export default Inventory;
