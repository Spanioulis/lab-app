import React, { useEffect, useState } from 'react';
import { Inventory, MaterialLab, SaveData } from '../components';
import { useFetch } from '../hooks';

const URL = '../../db.json';

const Bookings = ({ bookings, setBookings }) => {
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

      if (idButton === 'add') {
         // TODO -> comparar localData con data, para que no haya más cantidad
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

   // BOTÓN PRUEBA (RESET)
   const handleReset = () => {
      if (JSON.parse(localStorage.getItem('data'))) {
         setLocalData(JSON.parse(localStorage.getItem('data')));
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
         <SaveData equipment={equipment} setEquipment={setEquipment} bookings={bookings} setBookings={setBookings} />
         <div className="my-10 flex max-h-max flex-col justify-around gap-5 md:flex-row">
            {/* Col. Izquierda */}
            {data?.length > 0 && (
               <Inventory
                  localData={localData}
                  data={data}
                  currentId={currentId}
                  handleAddSub={handleAddSub}
                  handleReset={handleReset}
               />
            )}
            {/* Col. Derecha */}
            <MaterialLab equipment={equipment} setEquipment={setEquipment} />
         </div>
      </>
   );
};

export default Bookings;
