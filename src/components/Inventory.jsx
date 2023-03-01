import React from 'react';

const Inventory = ({ data }) => {
   return (
      <div className="h-96 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
         <table className="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700 ">
            <thead>
               <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                     Nombre
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                     Cantidad
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                     Formato
                  </th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
               {data.map((d) => (
                  <tr key={d.id}>
                     <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">{d.name}</td>
                     <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{d.quantity}</td>
                     <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{d.format}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Inventory;
