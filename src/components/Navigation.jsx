import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
   return (
      <>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn-ghost btn lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </label>
                  <ul
                     tabIndex={0}
                     className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                  >
                     <li>
                        <Link to="/bookings">Bookings</Link>
                     </li>
                     <li>
                        <Link to="/booking-list">Booking List</Link>
                     </li>
                     <li>
                        <Link to="/overview">Overview</Link>
                     </li>
                  </ul>
               </div>
               <Link to="/" className="block text-teal-600">
                  <span className="sr-only">Home</span>
                  <img className="w-56" src="/images/book-lab_logo_main.png" alt="book lab logo"></img>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li>
                     <Link to="/bookings">Bookings</Link>
                  </li>
                  <li>
                     <Link to="/booking-list">Booking List</Link>
                  </li>
                  <li>
                     <Link to="/overview">Overview</Link>
                  </li>
               </ul>
            </div>
            <div className="navbar-end gap-3">
               <a
                  className="block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-800"
                  href="/"
               >
                  Login
               </a>
               <a
                  className="text-bg-black hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium transition hover:text-red-800/75 sm:block"
                  href="/"
               >
                  Register
               </a>
            </div>
         </div>

         {/* <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
               <div className="flex flex-1 items-center justify-end md:justify-between">
                  <nav aria-label="Site Nav" className="hidden md:block"></nav>
                  <div className="flex items-center gap-4">
                     <div className="sm:flex sm:gap-4">

                     </div>

                     <button
                        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        onclick={() => setIsOpen(!isOpen)}
                     >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2}
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </header> */}
      </>
   );
}
export default Navigation;
