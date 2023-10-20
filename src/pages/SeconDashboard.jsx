import React, { useEffect } from 'react'
import finanzelogo from "../assets/img/logofigma.png";
import { useNavigate } from 'react-router-dom';

function SeconDashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            navigate('/login');
        }
    }, []);

  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
        <aside className="sidebar justify-end w-96 rounded-xl -translate-x-full transform bg-blue-700 p-3 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
            <div className="my-4 w-full text-center">
                <img src={finanzelogo} alt="logo" />
            </div>
            <div className="pt-4 pb-8">
                <ul className="space-y-2">
                    <li>
                        <a className="bg-indigo-950 text-white flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                                </svg>
                                <span>Dashboard</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-indigo-950 hover:text-white flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                            <span>Laporan</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-indigo-950 hover:text-white flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Rekap Investasi</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-indigo-950 hover:text-white flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                            </svg>
                            <span>Statistik</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-indigo-950 hover:text-white flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                            <span>Input Keuangan</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-indigo-950 hover:text-white flex items-center justify-between text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <span>Input Investasi</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='px-2 pt-28'>
                <ul className='space-y-2'>
                    <li>
                        <a className="hover:bg-indigo-950 hover:text-white flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-indigo-950 hover:text-white flex items-center justify-between text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <span>Logout</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main className="main -ml-48 w-full flex-col px-4 transition-all duration-150 ease-in md:ml-0">
            <div className="h-full items-center justify-center text-start text-3xl font-bold">
                <div className='px-5'>
                    <h1 className='font-Epilogue text-4xl'>Input Data Keuangan</h1>
                    <p className='font-semibold text-3xl mt-2'>Selamat datang, user! 😉👋</p>
                </div>
                <div className='px-5 mt-5 flex justify-between'>
                    <div className='text-white flex-grid w-52 h-28 px-2 py-2 bg-blue-600 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform ease-in-out'>
                        <p className='text-sm font-medium'>Saldo</p>
                        <h1 className='text-2xl mt-3 font-semibold'>Rp 120000</h1>
                        <p className='text-sm font-medium mt-3'>Per bulan oktober</p>
                    </div>
                    <div className='text-white flex-grid w-52 h-28 px-2 py-2 bg-yellow-400 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform ease-in-out'>
                        <p className='text-sm font-medium'>Pemasukan</p>
                        <h1 className='text-2xl mt-3 font-semibold'>Rp 120000</h1>
                        <p className='text-sm font-medium mt-3'>Per bulan oktober</p>
                    </div>
                    <div className='text-white flex-grid w-52 h-28 px-2 py-2 bg-red-500 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform ease-in-out'>
                        <p className='text-sm font-medium'>Pengeluaran</p>
                        <h1 className='text-2xl mt-3 font-semibold'>Rp 120000</h1>
                        <p className='text-sm font-medium mt-3'>Per bulan oktober</p>
                    </div>
                </div>
                <div className='mt-5 py-3 px-5 w-full border-collapse rounded-md bg-white text-left text-sm text-gray-500'>
                    <h1 className='font-Epilogue font-bold text-3xl text-black justify-center flex'>Histori Transaksi</h1>
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Tanggal Transaksi</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Keterangan Transaksi</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Kategori Transaksi</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nilai Transaksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                            <tr className="hover:bg-gray-50">
                                <th className="gap-3 px-6 py-4 font-normal text-gray-900">
                                    22/10/2023
                                </th>
                                <td className="px-6 py-4">
                                    Shopping
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">Pembelian</div>
                                        <div className="text-gray-400">Pengeluaran</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                    >
                                        Rp 10000
                                    </span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <th className="gap-3 px-6 py-4 font-normal text-gray-900">
                                    22/10/2023
                                </th>
                                <td className="px-6 py-4">
                                    Shopping
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">Pembelian</div>
                                        <div className="text-gray-400">Pengeluaran</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                    >
                                        Rp 10000
                                    </span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <th className="gap-3 px-6 py-4 font-normal text-gray-900">
                                    22/10/2023
                                </th>
                                <td className="px-6 py-4">
                                    Shopping
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">Pembelian</div>
                                        <div className="text-gray-400">Pengeluaran</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                    >
                                        Rp 10000
                                    </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        
        <nav className="w-72 h-full sidebar">
            <div className='flex w-96 px-2 py-3'>
                <p className='font-Epilogue flex font-semibold text-2xl'>Detail Cash Flow 💸</p>
            </div>
            <div className="w-full mx-autopx-2 px-2 py-3 bg-white h-full rounded-lg mb-5">
                <p className='font-Epilogue font-semibold text-xl'>Pemasukan</p>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
            </div>
            <div className="w-full mx-autopx-2 px-2 py-3 bg-white h-full rounded-lg">
                <p className='font-Epilogue font-semibold text-xl'>Pengeluaran</p>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>Shopping</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp 230000</p>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default SeconDashboard