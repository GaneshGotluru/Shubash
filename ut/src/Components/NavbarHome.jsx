import React from 'react'
import {NavLink, Link } from 'react-router-dom'

const NavbarHome = () => {
  return (
    <>
      {/* <div>
        <ul>
          <li><Link to={'/'}>Props</Link></li>
          <li><Link to={'/navbar'}>Navbar youtube</Link></li>
          <li><Link to={'/state'}>State Example</Link></li>
          <li><Link to={'/event'}>Events Example</Link></li>
          <li><Link to={'/video'}>video Example</Link></li>
          <li><Link to={'/categorie'}>categorie Example</Link></li>
          <li><Link to={'/assign'}> Assugnmet Movies</Link></li>
          <li><Link to={'/usersdom'}>User json</Link></li>
        </ul>
      </div> */}
      <div className="navbar" id='nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>


    </>
  )
}

export default NavbarHome