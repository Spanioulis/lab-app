import React, { useEffect, useState } from 'react';
import { Inventory } from '../components';
import { useFetch } from '../hooks';

const URL = '../../db.json';

const Booking = () => {
   const { isLoading, error, data } = useFetch(URL);
   const [localData, setLocalData] = useState([]);

   // BREAKPOINT

   useEffect(() => {
      const dataObject = JSON.parse(localStorage.getItem('data'));
      const dataArray = Object.values(dataObject);
      setLocalData(dataArray);
   }, []);

   const handleClick = (id, event) => {
      event.preventDefault();
      const idButton = event.target.id;

      if (idButton === 'add') {
         const updatedData = localData.map((item) =>
            item.id === id ? { ...item, quantity: parseInt(item.quantity) - 1 } : item
         );
         setLocalData(updatedData);
      } else if (idButton === 'sub') {
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
                           <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                              Nombre
                           </th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {localData.map((d) => (
                           <tr key={d.id}>
                              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                 {d.name}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                 <button
                                    onClick={(e) => handleClick(d.id, e)}
                                    value={d.quantity}
                                    name={d.name}
                                    id="add"
                                 >
                                    +
                                 </button>
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                 <button
                                    onClick={(e) => handleClick(d.id, e)}
                                    value={d.quantity}
                                    name={d.name}
                                    id="sub"
                                 >
                                    -
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
            {/* Col. Derecha */}
            {data && <Inventory data={localData} />}
         </div>
      </>
   );
};

export default Booking;
