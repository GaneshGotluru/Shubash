import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className="mainnav">
            <div className="tiltes">
                    <h2>E-Commerce</h2>
                </div>
                <div className="homecart">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/cart'}>Cart</Link>
                </div>
        </div>
        </>
    )
}

export default Navbar