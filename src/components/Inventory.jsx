import { useEffect } from 'react';

const Inventory = ({ data, localData, handleAddSub, currentId }) => {
   console.log('currentId:', currentId);
   const byName = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
   // console.log('localData:', localData[0]);
   // console.log('data:', data.sort(byName)[0]);

   useEffect(() => {
      // const buscando = data.filter((d) => d.id === currentId);
      // console.log('buscando:', buscando);
      // console.log();
   }, [localData]);

   return (
      <div className="flex flex-col">
         <h1 className="mb-2 text-center text-xl font-semibold text-blue-800">Stock actual</h1>
         <div className="h-96 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700 ">
               <thead>
                  <tr>
                     <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                        Nombre
                     </th>
                     <th className="whitespace-nowrap py-2 text-left font-medium text-gray-900 dark:text-white"></th>
                     <th className="whitespace-nowrap py-2 text-left font-medium text-gray-900 dark:text-white"></th>
                     <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                        Stock
                     </th>
                     <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                        Formato
                     </th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {localData.sort(byName).map((d) => (
                     <tr key={d.id}>
                        <td
                           className={
                              d.quantity !== 0
                                 ? 'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'
                                 : 'whitespace-nowrap px-4 py-2 font-bold text-red-700 dark:text-white'
                           }
                        >
                           {d.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-gray-700 dark:text-gray-200">
                           <button onClick={(e) => handleAddSub(d.id, e)} value={d.quantity} name={d.name} id="add">
                              +
                           </button>
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-gray-700 dark:text-gray-200">
                           <button onClick={(e) => handleAddSub(d.id, e)} value={d.quantity} name={d.name} id="sub">
                              -
                           </button>
                        </td>
                        <td
                           className={
                              d.quantity === 0
                                 ? 'whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-gray-200'
                                 : 'whitespace-nowrap px-4 py-2 text-center text-red-700 dark:text-gray-200'
                           }
                        >
                           {d.quantity}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{d.format}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Inventory;
