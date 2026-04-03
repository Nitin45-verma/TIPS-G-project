import React from 'react'
import "./Header.css"
import rns from './rus.png'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
      {/* Sticky Top aur Shadow add kiya hai taaki premium look aaye */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-2">
        <div className="container-fluid px-lg-5">
          
          {/* Logo Section */}
          <Link className="navbar-brand" to="/">
            <img src={rns} alt="Logo" style={{ width: '80px', height: 'auto' }} />
          </Link>

          {/* Mobile Toggler */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* mx-auto links ko center mein rakhega */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold  path" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/instructors">Instructors</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/gallery">Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/scholarship">Scholarships</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/franchise">Franchise</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold path" to="/contact">Contact</NavLink>
              </li>
            </ul>

            {/* Right Side Buttons */}
            <div className="d-flex  align-items-center gap-3">
              <Link to='/loginform' className="text-decoration-none">
                <button type="button" className="btn btn-outline-primary px-4 border-2 fw-bold">
                  <i className="fa-solid fa-arrow-right-to-bracket me-2"></i> Login
                </button>
              </Link>

              <Link to='/applynow' className="text-decoration-none ">
                <button type="button" className="btn btn-danger rounded-pill px-4 fw-bold shadow-sm">
                  Apply Now <i className="fa-solid fa-right-long ms-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header