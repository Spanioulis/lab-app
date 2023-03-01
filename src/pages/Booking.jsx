import React, { useState } from 'react';
import { Inventory } from '../components';
import { useFetch } from '../hooks';

const URL = '../../db.json';

const Booking = () => {
   const { loading, error } = useFetch(URL);
   const [data, setData] = useState(JSON.parse(localStorage.getItem('data')));
   console.log('data:', data);

   const [change, setChange] = useState();

   const handleAdd = (e) => {
      console.log(e.target.name);
      console.log(+e.target.value);
      setData([...data, { [e.target.name]: parseInt(e.target.quantity + 1) }]);
   };
   const handleSub = (e) => {
      console.log(e.target.value);
      setData([...data, { [e.target.name]: parseInt(e.target.quantity - 1) }]);
   };

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
                     {data.map((d) => (
                        <tr key={d.id}>
                           <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                              {d.name}
                           </td>
                           <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                              <button onClick={(e) => handleAdd(e)} value={d.quantity} name={d.name}>
                                 +
                              </button>
                           </td>
                           <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                              <button onClick={(e) => handleSub(e)} value={d.quantity} name={d.name}>
                                 -
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            {/* Col. Derecha */}
            <Inventory data={data} />
         </div>
      </>
   );
};

export default Booking;
