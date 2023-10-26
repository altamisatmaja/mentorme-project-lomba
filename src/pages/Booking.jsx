import Navbar from "../includes/Navbar";
import Footer from '../includes/Footer';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Booking() {
  return (
    <div>
      <Navbar />
      <main className="mt-10 p-5">

    <div className="md:mb-0 w-full mx-auto relative">
      <div className="px-4 lg:px-0">
        <h2 className="text-4xl font-semibold text-gray-800">
          Nama Mentor
        </h2>
        <p 
          className="py-2 text-green-700 justify-center"
        >
          Fee Mentoring
        </p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-2">

  <div className="px-4 lg:px-0 mt-4 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
  <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
      Pembahasan Sesi Mentoring
    </h2>
    <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
      justice. Six draw
      you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
      resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
      outlived peculiar rendered led six.</p>
    <div>
      <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Tempat</h2>
      <p className="pb-6">
      https://unej-id.zoom.us/j/mentoring#success
      </p>
    </div>
    <div>
      <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Waktu</h2>
      <p className="pb-6">
      Waktu Zoom
      </p>
    </div>
    </div>

  <div className="w-full lg:w-1/4 mt-4 m-auto max-w-screen-sm">
    <div className="p-4 border-t border-b md:border md:rounded">
      <div className="flex py-2">
          <p className="font-semibold text-gray-700 text-lg">Request Pembahasan Sesi Mentoring</p>
      </div>
      <p className="text-gray-700 py-3">
        Harap melakukan request yang sesuai dengan bidang, minat, dan penelitian ilmiah yang sedang kamu jalani
      </p>
      <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
            <textarea id="editor" rows="8" class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Masukkan deskripsi mentor..." required></textarea>
        </div>
      </div>
      <button className="px-2 py-1 text-gray-100 bg-blue-500 flex w-full items-center justify-center rounded">
        Checkout 
        <i className='bx bx-user-plus ml-2' ></i>
      </button>
    </div>
  </div>

</div>
</main>
      <Footer />
    </div>
  )
}

export default Booking