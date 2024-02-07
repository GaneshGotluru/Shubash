import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  let params = useParams()
  console.log(params)//{*: ''}
  let location = useLocation()
  let path = location.pathname.startsWith('/adminPortal') //include also same

  return (
    <div className='Navbar'>
      <div className="navbar">
        <div className="logo">
          <img src="/images/book.webp" id='i1' alt="" />
        </div>
        {path ?
          <div className="links">
            <Link style={{ textDecoration: 'none' }} to={'/adminPortal/'}>Home</Link>
            <Link style={{ textDecoration: 'none' }} to={'/adminPortal/books'}>Books</Link>
            <Link style={{ textDecoration: 'none' }} to={'/adminPortal/users'}>Users</Link>
            <Link style={{ textDecoration: 'none' }} to={'/adminPortal/addbooks'}>AddBooks</Link>

            {/* {location.pathname === '/adminPortal' && <Link style={{ textDecoration: 'none' }} to={'/adminPortal/users'}>Users</Link>}
            {location.pathname === '/adminPortal' && <Link style={{ textDecoration: 'none' }} to={'/adminPortal/addbooks'}>AddBooks</Link>}
            {location.pathname === '/adminPortal' && <Link style={{ textDecoration: 'none' }} to={'/adminPortal/addusers'}>AddUsers</Link>} */}

            <Link style={{ textDecoration: 'none' }} to={'/adminLogin'}>LogOut</Link>

          </div>
          : <div>
            <Link style={{ textDecoration: 'none' }} to={'/userPortal/'}>Home</Link>
            <Link style={{ textDecoration: 'none' }} to={'/userPortal/books'}>Books</Link>
            <Link style={{ textDecoration: 'none' }} to={'/userPortal/favourite'}>Favourite</Link>
            <Link style={{ textDecoration: 'none' }} to={'/Login'}>LogOut</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
