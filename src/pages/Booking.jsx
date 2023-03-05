import React, { useEffect, useState } from 'react';
import { Inventory } from '../components';
import { useFetch } from '../hooks';

const URL = '../../db.json';

const Booking = () => {
   const { isLoading, error, data } = useFetch(URL);
   const [localData, setLocalData] = useState([]);
   const [equipment, setEquipment] = useState(JSON.parse(localStorage.getItem('equipment')) || []);

   useEffect(() => {
      const dataObject = JSON.parse(localStorage.getItem('data'));

      if (dataObject) {
         const dataArray = Object.values(dataObject);
         setLocalData(dataArray);
      }
   }, [data]);

   useEffect(() => {
      localStorage.setItem('equipment', JSON.stringify(equipment));
   }, [equipment]);

   const handleAddSub = (id, event) => {
      event.preventDefault();
      const idButton = event.target.id;
      const name = event.target.name;
      const index = equipment.findIndex((item) => item.id === id);

      if (idButton === 'add') {
         const updatedData = localData.map((item) =>
            item.id === id ? { ...item, quantity: parseInt(item.quantity) - 1 } : item
         );
         setLocalData(updatedData);

         if (index === -1) {
            setEquipment([...equipment, { id: id, name: name, quantity: 1 }]);
         } else {
            const updatedEquipment = [...equipment];
            updatedEquipment[index].quantity += 1;
            setEquipment(updatedEquipment);
         }
      } else if (idButton === 'sub') {
         if (index !== -1) {
            const updatedEquipment = [...equipment];
            updatedEquipment[index].quantity -= 1;
            setEquipment(updatedEquipment);
         }

         const updatedData = localData.map((item) =>
            item.id === id ? { ...item, quantity: parseInt(item.quantity) + 1 } : item
         );
         setLocalData(updatedData);
      }
   };

   if (isLoading) {
      return <p>Loading...</p>;
   }
   if (error) {
      return <p>ERROR</p>;
   }

   return (
      <>
         <h1 className="my-10 text-center text-4xl font-semibold text-green-500">Bookings</h1>
         <div className="flex max-h-max justify-around">
            {/* Col. Izquierda */}
            <div className="flex flex-col">
               <h1 className="mb-2 text-center text-xl font-semibold text-orange-700">Selección material</h1>
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
            {/* Col. Derecha */}
            {data?.length > 0 && <Inventory data={localData} handleAddSub={handleAddSub} />}
         </div>
      </>
   );
};

export default Booking;
