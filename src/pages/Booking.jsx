import React, { useEffect, useState } from 'react';
import { Inventory } from '../components';
import { useFetch } from '../hooks';

const URL = '../../db.json';

const Booking = () => {
   const { isLoading, error, data } = useFetch(URL);
   console.log('data:', data[0]);
   const [localData, setLocalData] = useState([]);
   console.log('localData:', localData[0]);

   useEffect(() => {
      const localStorageData = localStorage.getItem('data');
      if (localStorageData) {
         setLocalData(JSON.parse(localStorageData));
      }
   }, []);

   const handleClick = (event) => {
      event.preventDefault();
      const value = parseInt(event.target.value);
      const name = event.target.name;
      const id = event.target.id;

      if (id === 'add') {
         setLocalData({
            ...localData,
            [name]: value - 1
         });
      } else if (id === 'sub') {
         setLocalData({
            ...localData,
            [name]: value + 1
         });
      }
   };

   useEffect(() => {
      localStorage.setItem('bookingData', JSON.stringify(localData));
   }, [localData]);

   if (isLoading) {
      return <p>Loading...</p>;
   }
   if (error) {
      return <p>ERROR</p>;
   }

   const mergedData = data.map((d) => ({
      ...d,
      quantity: localData[d.name] || d.quantity
   }));
   console.log('mergedData:', mergedData[0]);

   return (
      <>
         <h1 className="my-10 text-center text-4xl font-semibold text-green-500">Bookings</h1>
         <div className="flex max-h-max justify-around">
            {/* Col. Izquierda */}
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
                     {mergedData.map((d) => (
                        <tr key={d.id}>
                           <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                              {d.name}
                           </td>
                           <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                              <button onClick={(e) => handleClick(e)} value={d.quantity} name={d.name} id="add">
                                 +
                              </button>
                           </td>
                           <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                              <button onClick={(e) => handleClick(e)} value={d.quantity} name={d.name} id="sub">
                                 -
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            {/* Col. Derecha */}
            {data && <Inventory data={mergedData} />}
         </div>
      </>
   );
};

export default Booking;
