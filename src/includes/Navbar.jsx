import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <nav className="bg-blue-600 border-gray-200 px-6 py-6 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl sm:text-3xl font-bold whitespace-nowrap text-white dark:text-white">
            mentor-me
          </span>
        </a>
        <div className="flex items-center">
          <button
            onClick={toggleDropdown}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Buka main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="justify-between items-center"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                className="block py-2 pr-4 pl-3 text-white lg:hover:text-blue-700 rounded lg:bg-transparent lg:p-0 dark:text-white"
                aria-current="page"
              >
                <Link to="/">Beranda</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white  border-gray-100 rounded-md hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to="/about">Tentang Kami</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white border-gray-100 rounded-md hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to="/jadwal">Jadwal</Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white  border-gray-100 rounded-md hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to="/mentoring">Cari Mentor</Link>
              </a>
            </li>
            <li>
            <a className="hidden hover:text-black text-white md:block dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 border-gray-300 dark:border-gray-300 dark:border-solid-2 dark:hover:border-gray-800 border-solid-2 border">
            <Link to="/masuk">Login</Link>
          </a>
            </li>
            <li>
            <a className="text-white hidden md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Link to="/daftar">Mulai Sekarang</Link>
          </a>
            </li>
          </ul>
        </div>
      </div>
      {isDropdownOpen && (
        <ul className="dark:text-white md:hidden flex flex-col p-5 list-none ml-3">
          <li className="mb-5" href="#">
            <Link to="/">Beranda</Link>
          </li>
          <li className="mb-5" href="#">
            <Link to="/about">Tentang Kami</Link>
          </li>
          <li className="mb-5" href="#">
            <Link to="/jadwal">Jadwal</Link>
          </li>
          <li className="mb-5" href="#">
            <Link to="/mentoring">Cari Mentor</Link>
          </li>
          <li>
            <button className="text-white border px-4 bg-blue-700 rounded-md">
              <Link to="/masuk">Login</Link>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
