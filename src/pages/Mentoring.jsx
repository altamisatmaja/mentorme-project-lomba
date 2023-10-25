import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Mentoring() {
    const [dashboardmentor, setDashboardMentor] = useState([]);
    
    const [id, idChange] = useState("");
    const [namamentor, namamentorChange] = useState("");
    const [minatpenelitian, minatpenelitianChange] = useState("");
    const [deskripsimentor, deskripsimentorChange] = useState("");
    const [fee, feeChange] = useState("");

    useEffect(() => {
      ReadDatabase();
    }, []);

    const ReadDatabase = () => {
      axios.get("http://localhost:8083/dashboardmentor")
        .then((res) => {
          setDashboardMentor(res.data);
        })
    }
  return (
    <div>
      <Navbar />
      <main className=" dark:bg-gray-800 bg-white mt-0 pt-0">
        <div className="ml-4 mt-1 mb-3">
          <h3 className="bg-blue-50 font-semibold rounded ml-2 mt-2 p-2 pl-6 pr-6 inline-block bg-contain">
            Temukan mentor Anda
          </h3>
        </div>
        {dashboardmentor.map((data, id) => (
        <div key={id} className="container pt-2 pb-8 mx-auto flex flex-wrap justify-center">
          <div className="lg:w-96 md:w-1/2 w-full p-4">
            <div className="p-8 rounded-xl border-2 bg-gray-50 border-gray-200">
              <img
                className="mb-4 shadow-md mx-auto h-40 w-full"
                alt="Use any sample image here..."
                src=""
              />
              <h4 className="mb-2 text-lg font-semibold mt-4">
              {data.namamentor}
              </h4>
              <p className="text-base">
              {data.deskripsimentor}
              </p>
              <h3 className="mt-2 text-sm font-medium text-blue-400">
              {data.minatpenelitian}
              </h3>

              <p className="mt-1.5 text-sm text-gray-500">
              {data.fee}
              </p>

              <form className="mt-4 flex flex-col md:flex-row gap-2">
              <button class="text-white w-full md:w-1/2 md:ml-1 rounded bg-red-400 p-4 text-sm font-semibold transition hover:scale-105">
                  Booking
                </button>
                <button className="text-white block w-full rounded bg-blue-700 p-4 text-sm font-semibold transition ease-in-out hover:scale-105">
                  Details
                </button>
              </form>
            </div>
          </div>
        </div>
        ))}
      </main>
      <Footer/>
    </div>
  );
}

export default Mentoring;
