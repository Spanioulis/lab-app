# Lab App 📆🧪

El objetivo de este proyecto es desarrollar una aplicación que permita realizar reserva diarias de laboratorios y su correspondiente material en un hospital de la provincia de Barcelona. Al ingresar a la página inicial, el usuario encontrará un menú de navegación con diferentes opciones. Para hacer una reserva de laboratorio y material, debe hacer clic en el botón "Bookings". Para ver el listado de reservas confirmadas, debe hacer clic en el botón "Booking List". La sección "Overview" estará disponible en la siguiente fase del proyecto.

La sección de **Bookings** se compone de varios apartados. En primer lugar, se encuentra la introducción de los datos obligatorios para realizar una reserva: _Nombre_, _DNI_, _Mail_, _Fecha Reserva_, _Lab_ (Laboratorio). Si falta algún dato, al hacer clic en el botón "Save Data", aparecerá una _alert_ que indicará al usuario que complete los datos requeridos.

Por otro lado, si los datos introducidos son correctos y están completos, el usuario verá un modal de confirmación de reserva con dos botones: "Sí, confirmar" y "Cancelar". Al confirmar la reserva, aparecerá otro modal con la información de la reserva y un botón "Ok" que cerrará el modal.

En la reserva de laboratorio, se puede agregar la reserva de material que se encuentra en la parte inferior de la página. Esta sección se divide en dos partes: **Stock actual** (izquierda) y **Selección de material** (derecha). En la sección de Stock actual, encontrará un botón de añadir (_+_) y botón de quitar (_-_), la _imagen_ del material, _Nombre_, _Stock_ y _Formato_. Por otro lado, en la sección de Selección de material, se muestra una tabla con el _Nombre_ y las _Unidades_ seleccionadas. También hay un botón disponible para borrar toda la selección de material al hacer clic en él.

En la sección de **Book List** el usuario puede acceder al listado de reservas organizado en una tabla con los siguientes campos: _Nombre_, _DNI_, _Fecha Reserva_, _Laboratorio_, _Material_. La tabla se ordena automáticamente de forma cronológica, mostrando primero las reservas más próximas y finalizando con las más lejanas.

## Demo

🚀 [Click aquí](https://app.netlify.com/sites/lab-booking-app/settings/general)

## Descripción

Proyecto realizado con React & JavaScript y maquetado con TailwindCSS (DaisyUI) & MaterialUI. Enfocado en la versión de escritorio pero responsive, se ha usado Vite por su rapidez de compilación. El proyecto está formado por las siguientes carpetas: _components_ (global) para todos los componentes, carpeta _assets_ para las imágenes (formato .png) del material, carpeta _hooks_ (custom hook _useFetch_), carpeta _page_ para las dos rutas ('/', '/bookings', '/overview', 'booking-list'), carpeta _styles_ (estilos de la app).

![Lab App Demo](https://user-images.githubusercontent.com/97700906/232208891-07a2038b-3668-47c6-94bf-19bcccf2dfda.gif)
![Home](https://user-images.githubusercontent.com/97700906/232208434-c536bc84-916f-46cf-938b-6c762776496b.png)
![Bookings](https://user-images.githubusercontent.com/97700906/232208453-2869d24e-afba-4493-9463-a20a7e6e28ad.png)
![Save Data](https://user-images.githubusercontent.com/97700906/232208505-cc41484e-70a9-4000-ab22-f0a9b6ea1c77.png)
![Confirm Booking](https://user-images.githubusercontent.com/97700906/232208510-c4279336-8a07-44c0-be5e-29011d961249.png)
![Booking List](https://user-images.githubusercontent.com/97700906/232208482-fe6a67a7-3095-474d-b08c-fd78f4517b8e.png)

## Instalación

1. Clona el repositorio en tu equipo: git clone https://github.com/Spanioulis/lab-app.git
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre http://localhost:5174 en tu navegador para ver la aplicación en acción

## Calidad de código

![Codefactor LabApp](https://user-images.githubusercontent.com/97700906/232208640-83b037f6-a2b1-445a-9bfe-ee36a198a84a.PNG)
