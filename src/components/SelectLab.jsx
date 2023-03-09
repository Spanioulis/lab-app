import React from 'react';

const labs = [
   { id: 'lab-1', name: 'Laboratorio 1' },
   { id: 'lab-2', name: 'Laboratorio 2' },
   { id: 'lab-3', name: 'Laboratorio 3' },
   { id: 'lab-4', name: 'Laboratorio 4' },
   { id: 'lab-5', name: 'Laboratorio 5' }
];

const SelectLab = ({ handleSelect }) => {
   return (
      <>
         <div x-data="{ isActive: false }" className="relative">
            <div className="inline-flex items-center divide-x divide-gray-100 overflow-hidden rounded-md border bg-green-600 ">
               <p className="px-4 py-2 text-sm leading-none text-gray-300 hover:bg-green-600 hover:text-gray-700">
                  Lab
               </p>
               <button x-on:click="isActive = !isActive" className="h-full p-2 text-gray-300 hover:bg-green-600">
                  <span className="sr-only">Menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                     <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
            </div>
            <div
               className="absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
               role="menu"
               x-cloak=""
               x-transition=""
               x-show="isActive"
            >
               <div className="p-2">
                  {labs.map((l) => {
                     return (
                        <li
                           key={l.id}
                           className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                           role="menuitem"
                           x-on:click="isActive = !isActive"
                        >
                           <button onClick={handleSelect} value={l.name}>
                              {l.name}
                           </button>
                        </li>
                     );
                  })}
               </div>
               {/* <div className="p-2">
                  <form method="POST" action="#">
                     <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-4 w-4"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2}
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                           />
                        </svg>
                        Delete Product
                     </button>
                  </form>
               </div> */}
            </div>
         </div>
      </>
   );
};

export default SelectLab;
