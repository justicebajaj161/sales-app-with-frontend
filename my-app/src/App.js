import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import AddSales from './Component/AddSales';
import Register from './Login-Reg/Register';
import Login from './Login-Reg/Login';
import SalesTable from './Component/SalesTable';
import TodaysHighestRevenue from './Component/TodaysHighestRevenue';
import ProtectedRoutes from './Login-Reg/ProtectRoutes';
function App() {
  return (
   <>
    <BrowserRouter>
        
        
        <ToastContainer/>
          {/* <Sidebar /> */}
          <Routes>

            {/*Another way is using Outlet*/}
            
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/confirm/:token" element={<PreToken />} /> */}
           
            <Route path="/" element={<Navbar />}>
              <Route index element={<ProtectedRoutes><AddSales /></ProtectedRoutes>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/salestable" element={<ProtectedRoutes><SalesTable/></ProtectedRoutes>} />
              <Route path="/todaysrevenue" element={<ProtectedRoutes><TodaysHighestRevenue/></ProtectedRoutes>} />
              {/* <Route path="/userprofile" element={<ProtectedRoutes><Userprofile /></ProtectedRoutes>} /> */}
           
            </Route>
         

          </Routes>
        
      </BrowserRouter>
   
   </>
  );
}

export default App;
