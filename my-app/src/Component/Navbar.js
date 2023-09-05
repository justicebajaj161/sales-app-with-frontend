import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  const navigate = useNavigate()
  const logOut=()=>{
    localStorage.removeItem('auth')
    navigate('/login')
    toast.success('Logged Out Successfully')
  }
  return (
<div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid  navbar-bg  navbar-bg">
      <a className="navbar-brand">Sales App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to='/'><a className="nav-link" activeClassName="active" >Add-Sales</a></NavLink>
          <NavLink to='/todaysrevenue'><a className="nav-link" activeClassName="active" >Today's-Highest-Revenue</a></NavLink>
          <NavLink to='/salestable'><a className="nav-link" activeClassName="active" >Top-Sales</a></NavLink>
          <NavLink to='/login'><a className="nav-link" activeClassName="active" >Login</a></NavLink>
          <NavLink to='/register'><a className="nav-link" activeClassName="active" >Register</a></NavLink>
          <a className="nav-link" onClick={logOut}>LogOut</a>
          <a className="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
  <Outlet/>
</div>

  )
}

export default Navbar
