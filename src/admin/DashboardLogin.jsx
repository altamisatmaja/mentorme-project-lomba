import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  // const [token, setToken] = useState('');

  // const [username, usernameupdate] = useState('');
  // const [password, passwordupdate] = useState('');

  // const usenavigate = useNavigate();

  // const prosesLogin = (e) => {
  //   e.preventDefault();
    
  //   if (validasi()) {
  //     fetch("http://localhost:8083/akunadmin/" + username).then((res) => {
  //       console.log("Database Password:", res.password);
  //       console.log("Entered Password:", password);
  //       return res.json();
  //     }).then((resp) => {
  //       if (Object.keys(resp).length === 0) {
  //         alert('Masukkan username yang benar!')
  //       } else {
          
  //         if (resp.password === password) {
  //           sessionStorage.setItem('username', username);
  //           sessionStorage.setItem('userrole',resp.role);
  //           usenavigate('/dashboardadmin')
  //         }else{
  //           alert('Masukkan inputan yang benar!')
  //         }
  //       }
  //     }).catch((err) => {
  //       toast.error('Login Failed due to :' + err.message);
  //     }); 
  //   }
  // }

  // const validasi = () => {
  //   let result = true;
  //   if (username === '' || username === null) {
  //     result = false;
  //     alert('Isi username')
  //   }
  //   if (password === '' || password === null) {
  //     result = false;
  //     alert('Isi password')
  //   }
  //   return result;

  // }

  // onSubmit={prosesLogin}
  // value={username} onChange={e => usernameupdate(e.target.value)}
  // value={password} onChange={e => passwordupdate(e.target.value)}

  return (
    <div className=' w-1/2 mx-auto p-5 mt-10 mb-10 rounded-xl shadow-xl'>
      <form className='container' >
        <div className='card-body'>
          <div className='card-header mb-5'>
            <h1 className='font-Epilogue font-semibold text-3xl'>Halo admin, Yuk login 😁</h1>
          </div>
          <div className='card-body'>
            <div className='mb-4'>
              <p className='font-Montserrat mb-2'>Username</p>
              <input  required type="text" className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
            <div className='mb-4'>
              <div className='mb-2 flex flex-wrap justify-between'>
              <p className=''>Password</p>
              <p className='text-blue-500'>Lupa Sandi?</p>
              </div>
              <input required type="password" className='border w-full rounded-md px-2 h-10 border-blue-200'/>
            </div>
          </div>
          <div className='card-footer mt-10'>
          <Link to='/dashboardadmin '><button type='submit' className='w-full bg-blue-700 h-10 rounded-lg font-semibold text-white'>Login</button></Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login