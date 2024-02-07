import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

const HomePage = () => {
    return (


        <div className="parentlanding">
            <div className='landingPage'>
                <h1 id='he'>Book Hub</h1>
                <div className="loginOptions">
                    <Link className='btn' to={'/adminLogin'} style={{ textDecoration: "none" }}>Admin Login</Link> 
                    <Link className='btn' to={'/userLogin'} style={{ textDecoration: "none" }}>User Login</Link>
                </div>

            </div>

        </div>

    )
}

export default HomePage