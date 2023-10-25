import React from "react";

function Daftar() {
  return (
    <div className="bg-gray-100 sm:flex justify-center items-center h-screen">
      <div className="w-full lg:w-1/2 h-1/3 sm:h-screen bg-blue-600 dark:bg-gray-800"></div>

      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 h-2/3 sm:h-screen bg-blue-200">
        <h1 className="flex text-white justify-center text-2xl font-bold mb-4">
          Register Now
        </h1>
        <form action="#">
          <div className="mb-2">
            <label for="username" className="block mb-2 text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>

          <div className="mb-4">
            <label for="password" className="block mb-2 text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-800 text-white font-semibold rounded-md mt-3 py-3 px-4 w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Daftar;
