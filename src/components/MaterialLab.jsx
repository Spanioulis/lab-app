import React from 'react';
import Button from './ButtonDel';
import Table from '@mui/material/Table';
import { MaterialTable } from '.';

const MaterialLab = ({ equipment, setEquipment }) => {
   return (
      <div className="flex flex-col">
         <h1 className="mb-2 text-center text-xl font-semibold text-orange-700">Selección material</h1>
         <MaterialTable equipment={equipment} />
         <Button setEquipment={setEquipment} equipment={equipment} />
      </div>
   );
};

export default MaterialLab;
