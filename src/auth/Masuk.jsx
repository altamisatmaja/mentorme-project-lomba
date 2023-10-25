import React from "react";
import { Link } from "react-router-dom";

function Masuk() {
  return (
    <div class="bg-gray-100 sm:flex justify-center items-center h-screen">
      <div class="flex justify-center items-center w-full lg:w-1/2 h-1/3 sm:h-screen bg-blue-600 dark:bg-gray-800">
        <h1 className="text-white text-3xl font-extrabold">Mentor me</h1>
      </div>

      <div class="flex flex-col justify-center dark:bg-gray-700 bg-blue-200 h-2/3 sm:h-screen lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 class="text-white flex justify-center text-2xl font-bold mb-4">
          Welcome Back!
        </h1>
        <form action="#" method="POST">
          <div class="mb-2">
            <label for="username" class="block mb-2 text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>

          <div class="mb-4">
            <label for="password" class="mb-2 block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>

          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md mt-3 py-3 px-4 w-full"
          >
            Login
          </button>
        </form>

        <div class="mt-6 text-blue-400 text-center">
          <a class="hover:underline">
            <Link to="/daftar">Sign Up Here</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Masuk;
