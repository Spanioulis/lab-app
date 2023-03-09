import React from 'react';
import Button from './ButtonDel';

const MaterialLab = ({ equipment, setEquipment }) => {
   return (
      <div className="flex flex-col">
         <div className="mb-3 flex flex-row justify-around">
            <h1 className="mb-2 text-center text-xl font-semibold text-orange-700">Selección material</h1>
            <Button setEquipment={setEquipment} equipment={equipment} />
         </div>

         <div className="h-96 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700 ">
               <thead>
                  <tr>
                     <th className="w-64 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                        Nombre
                     </th>
                     <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                        Unidades
                     </th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {equipment?.length > 0 &&
                     equipment.map((e) => (
                        <tr key={e.name}>
                           <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                              {e.name}
                           </td>
                           <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 dark:text-white">
                              {e.quantity}
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MaterialLab;
