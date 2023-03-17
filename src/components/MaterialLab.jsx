import React from 'react';
import Button from './ButtonDel';
import Table from '@mui/material/Table';
import { MaterialTable } from '.';

const MaterialLab = ({ equipment, setEquipment }) => {
   return (
      <div className="flex flex-col">
         <div className="mb-3 flex flex-row justify-around">
            <h1 className="mb-2 text-center text-xl font-semibold text-orange-700">Selección material</h1>
         </div>

         {/* <div className="h-96 w-auto overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"> */}
         <MaterialTable equipment={equipment} />
         <Button setEquipment={setEquipment} equipment={equipment} />

         {/* </div> */}
      </div>
   );
};

export default MaterialLab;
