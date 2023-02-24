import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Overbooking = () => {
  return (
    <>
      <Navigation />
      <div className="text-3xl text-purple-700 mb-5">
        <img
          className="object-cover h-30 w-96"
          src="/book-lab_logo_main.png"
          alt="logo-corporate"
        ></img>
      </div>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <Link to="/bookings">
          <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800">
            Bookings
          </button>
        </Link>
        <Link to="/overview">
          <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800">
            Overview
          </button>
        </Link>
      </span>
    </>
  );
};

export default Overbooking;
