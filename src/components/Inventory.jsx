const Inventory = ({ data, handleAddSub }) => {
   const byName = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

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
                        Cantidad
                     </th>
                     <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                        Formato
                     </th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {data.sort(byName).map((d) => (
                     <tr key={d.id}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
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
                        <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-gray-200">
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
