import React from 'react'
import imag from "./img.png"
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <img src={imag} className="navbar-logo" alt="Image"/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
