import React from "react";
import { useFetch } from "../hooks";

const Booking = () => {
  const URL = "../../db.json";
  const { data, loading, error } = useFetch(URL);
  console.log("data:", data);
  return (
    <>
      <h1 className="my-10 text-center text-4xl font-semibold text-green-500">
        Bookings
      </h1>
      <div className="flex max-h-max justify-around">
        {/* Col. Izquierda */}
        <div>Aquí irán los selectores para hacer pruebas...</div>
        {/* Col. Derecha */}
        <div className="h-96 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700 ">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  Nombre
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  Cantidad
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  Formato
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {data.map((d) => (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    {d.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    {d.quantity}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    {d.format}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Booking;
