import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/Admin.css'

const AdminLogin = () => {
    let navigate = useNavigate()
    let email = useRef()
    let password = useRef()


    let login = (e) => {
        e.preventDefault()
        // console.log(email.current.value)
        // console.log(password.current.value)
        let admin = {
            email: "admin@gmail.com",
            password: 12345
        }
        if (email.current.value === admin.email && parseInt(password.current.value) === admin.password) {
            //Navigating Admin page
            navigate('/adminPortal')
        }
        else {
            alert('Invalid admin Credentials')
        }

    }


    return (
        <div className="mainAdmin">
            <div className='AdminLogin'>
                <h1 id='o'>Admin Login</h1>
                <div className="adminForm">
                    <form onSubmit={login}>
                        <div className="adminEmail">
                            <input className='forminput' type="email" placeholder='Enter your email address' ref={email} />
                        </div><br />
                        <div className="adminPassword">
                            <input  className='forminput' type="password" placeholder='enter your password' ref={password} required />

                        </div><br />
                        <div className="loginBtn">
                            <button className='btn'>Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default AdminLogin

