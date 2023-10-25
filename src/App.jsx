import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify';
import DashboardEdit from '/src/admin/DashboardEdit';
import DashboardAdmin from '/src/admin/DashboardAdmin';
import DashboardJadwal from '/src/admin/DashboardJadwal';
import DashboardLogin from '/src/admin/DashboardLogin';
import DashboardUser from '/src/admin/DashboardUser';
import Jadwal from '/src/pages/Jadwal';
import LandingPage from './pages/LandingPage';
import Mentoring from './pages/Mentoring';
import About from './pages/About';
import Masuk from './auth/Masuk';
import Daftar from './auth/Daftar';

function App() {
  return (
    <div className='app'>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/mentoring" element={ <Mentoring/> } />
        <Route path="/jadwal" element={ <Jadwal/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/masuk" element={ <Masuk/> } />
        <Route path="/daftar" element={ <Daftar/> } />
        <Route path="/edit/:id" element={ <DashboardEdit/> } />
        <Route path="/dashboardadmin" element={ <DashboardAdmin/> } />
        <Route path="/dashboardjadwal" element={ <DashboardJadwal/> } />
        <Route path="/dashboarduser" element={ <DashboardUser/> } />
        <Route path="/dashboardlogin/" element={ <DashboardLogin/> } />
      </Routes>
    </div>
  )
}

export default App;