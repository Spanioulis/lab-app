import React, { useEffect, useState } from 'react';
import { Inventory, MaterialLab } from '../components';
import SelectLab from '../components/SelectLab';
import { useFetch } from '../hooks';

const URL = '../../db.json';

const Booking = () => {
   const { isLoading, error, data } = useFetch(URL);
   const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('local-data')) || []);
   const [equipment, setEquipment] = useState(JSON.parse(localStorage.getItem('equipment')) || []);
   const [currentId, setCurrentId] = useState(0);

   useEffect(() => {
      // TODO -> Mirar porqué cuando arrancas está vacío. Es por qué al ser localData y estar vacío...
      // Lo que se puede hacer es que cuando arranque que la página, si no hay localStorage, que cargue la data...

      if (localData.length !== 0) {
         const dataObject = JSON.parse(localStorage.getItem('local-data'));
         if (dataObject) {
            const dataArray = Object.values(dataObject);
            setLocalData(dataArray);
         }
      } else {
         const dataObject = JSON.parse(localStorage.getItem('data'));

         if (dataObject) {
            const dataArray = Object.values(dataObject);
            setLocalData(dataArray);
         }
      }
   }, [data]);

   useEffect(() => {
      localStorage.setItem('local-data', JSON.stringify(localData));
   }, [localData]);

   useEffect(() => {
      localStorage.setItem('equipment', JSON.stringify(equipment));
   }, [equipment]);

   const handleAddSub = (id, event) => {
      event.preventDefault();
      setCurrentId(id);
      const idButton = event.target.id;
      const name = event.target.name;
      const index = equipment.findIndex((item) => item.id === id);

      // TODO -> Eliminar de 'equipment' aquellos que vuelvan a cantidad 0 o se eliminen (futuro botón)

      const buscando = data.filter((d) => d.id === currentId);

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

   //! BOTÓN PRUEBA (RESET)
   const handleReset = () => {
      if (JSON.parse(localStorage.getItem('data'))) {
         // console.log('hay data');
         setLocalData(JSON.parse(localStorage.getItem('data')));
      }
      // console.log('NO');
   };

   const handleSelect = (e) => {
      console.log(e.target.value);
      console.log('h');
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
            <MaterialLab equipment={equipment} setEquipment={setEquipment} />
            <button
               className="inline-block h-10 rounded-xl bg-slate-600 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 focus:relative"
               onClick={handleReset}
            >
               RESET
            </button>
            <SelectLab handleSelect={handleSelect} />

            {/* Col. Derecha */}
            {data?.length > 0 && (
               <Inventory localData={localData} data={data} currentId={currentId} handleAddSub={handleAddSub} />
            )}
         </div>
      </>
   );
};

export default Booking;
