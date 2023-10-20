import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./auth/Login";
import Register from "./auth/Register";
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import SeconDashboard from './pages/SeconDashboard';
import InputKeuangan from './pages/InputKeuangan';
import Edit from './pages/Edit';

function App() {
  return (
    <div className='app'>
      <ToastContainer></ToastContainer>
      {/* <Header/> */}
      <Routes>
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/secondashboard" element={ <SeconDashboard/> } />
        <Route path="/edit/:id" element={ <Edit/> } />
      </Routes>
    </div>
  )
}

export default App;