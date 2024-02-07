import React from 'react'
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
            <div className="logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="search">
                <input type="text" name="" placeholder="search " id="" />
            </div>
            <div className="options">
                <button>Add Video</button>
                <button>Sign in</button>
            </div>
        </div>
  )
}

export default Navbar