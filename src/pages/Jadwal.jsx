import React from "react";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";

function Jadwal() {
  return (
    <div>
      <Navbar />
      <div className="container bg-white dark:bg-gray-800 p-3">
        <div className="flex mx-auto">
          <h3 className="bg-blue-50 mx-auto font-semibold rounded p-2 pl-6 pr-6 inline-block bg-contain">
            Jadwal mentoring Anda
          </h3>
        </div>
        <div className=" w-full p-4">
          <div className="flex flex-col justify-start p-5 h-auto rounded-xl border-2 bg-gray-50 border-gray-200">
            <h6 className="font-semibold mb-5 text-lg">
              Implementasi SDLC Agile dalam rancang bangun perangkat lunak
            </h6>
            <div className="md:flex ">
              <div className=" w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Waktu :</h1>
                <h1>Jumat, 25 Oktober / 19.00 - 20.00 WIB</h1>
              </div>
              <div className=" w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Mentor : </h1>
                <h3>Muhammad Pahlevi, S.kom, CEH.</h3>
              </div>
              <div className="w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Fee Mentoring : </h1>
                <h3>Rp. 75.000 </h3>
              </div>
              <div className="md:w-1/4 h-10 md:h-20 flex justify-end ">
                <button className="bg-blue-200 hover:bg-blue-300 font-semibold p-2 rounded">
                  Tautan Zoom
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full p-4">
          <div className="flex flex-col justify-start p-5 h-auto rounded-xl border-2 bg-gray-50 border-gray-200">
            <h6 className="font-semibold mb-5 text-lg">
              Identifikasi sumber data primer dan sekunder pada penelitian
            </h6>
            <div className="md:flex ">
              <div className=" w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Waktu :</h1>
                <h1>Minggu, 27 Oktober / 08.00 - 10.00 WIB</h1>
              </div>
              <div className=" w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Mentor : </h1>
                <h3>Dewi Ratnasari, S.pd.</h3>
              </div>
              <div className="w-full p-4 mb-3 md:mr-3 rounded border-2 border-gray-200">
                <h1 className="font-semibold">Fee Mentoring : </h1>
                <h3>Rp. 50.000 </h3>
              </div>
              <div className="md:w-1/4 h-10 md:h-20 flex justify-end ">
                <button className="bg-blue-200 hover:bg-blue-300 font-semibold p-2 rounded">
                  Tautan Zoom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Jadwal;
