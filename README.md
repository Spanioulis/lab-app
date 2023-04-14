# Lab App 📆🧪

El objetivo de este proyecto es desarrollar una aplicación que permita realizar reserva diarias de laboratorios y su correspondiente material en un hospital de la provincia de Barcelona. Al ingresar a la página inicial, el usuario encontrará un menú de navegación con diferentes opciones. Para hacer una reserva de laboratorio y material, debe hacer clic en el botón "Bookings". Para ver el listado de reservas confirmadas, debe hacer clic en el botón "Booking List". La sección "Overview" estará disponible en la siguiente fase del proyecto. 

La sección de __Bookings__ se compone de varios apartados. En primer lugar, se encuentra la introducción de los datos obligatorios para realizar una reserva: *Nombre*, *DNI*, *Mail*, *Fecha Reserva*, *Lab* (Laboratorio). Si falta algún dato, al hacer clic en el botón "Save Data", aparecerá una *alert* que indicará al usuario que complete los datos requeridos.

Por otro lado, si los datos introducidos son correctos y están completos, el usuario verá un modal de confirmación de reserva con dos botones: "Sí, confirmar" y "Cancelar". Al confirmar la reserva, aparecerá otro modal con la información de la reserva y un botón "Ok" que cerrará el modal.

En la reserva de laboratorio, se puede agregar la reserva de material que se encuentra en la parte inferior de la página. Esta sección se divide en dos partes: __Stock actual__ (izquierda) y __Selección de material__ (derecha). En la sección de Stock actual, encontrará un botón de añadir (*+*) y botón de quitar (*-*), la *imagen* del material, *Nombre*, *Stock* y *Formato*. Por otro lado, en la sección de Selección de material, se muestra una tabla con el *Nombre* y las *Unidades* seleccionadas.  También hay un botón disponible para borrar toda la selección de material al hacer clic en él.

En la sección de __Book List__ el usuario puede acceder al listado de reservas organizado en una tabla con los siguientes campos: *Nombre*, *DNI*, *Fecha Reserva*, *Laboratorio*, *Material*. La tabla se ordena automáticamente de forma cronológica, mostrando primero las reservas más próximas y finalizando con las más lejanas.

## Demo

🚀 [Click aquí]()

## Descripción

Proyecto realizado con React & JavaScript y maquetado con TailwindCSS (DaisyUI) & MaterialUI. Enfocado en la versión de escritorio pero responsive, se ha usado Vite por su rapidez de compilación. El proyecto está formado por las siguientes carpetas: *components* (global) para todos los componentes, carpeta *assets* para las imágenes (formato .png) del material, carpeta *hooks* (custom hook *useFetch*), carpeta *page* para las dos rutas ('/', '/bookings', '/overview', 'booking-list'), carpeta *styles* (estilos de la app).

![Lab App Demo]()
![Bookings]()
![Booking List]()

## Instalación

1. Clona el repositorio en tu equipo: git clone https://github.com/Spanioulis/lab-app.git
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre http://localhost:5174 en tu navegador para ver la aplicación en acción

## Calidad de código

![codefactor]()
