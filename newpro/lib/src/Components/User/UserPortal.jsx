import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomeAdmin from '../HomeAdmin'
import Books from '../Books'
import Navbar from '../Navbar'
import ReadBook from '../ReadBook'
import Favourite from './Favourite'

const UserPortal = () => {
  let [cart,setCart]=useState([])
  return (
    <div className='UserPortal'>
        <Navbar />
        <Routes>
            <Route element={<HomeAdmin/>} path='/'/>
            <Route element={<Books/>} path='/books' />
            <Route element={<ReadBook  cart={cart} setCart={setCart}  />} path='/books/:id'/>
            <Route element={<Favourite cart={cart} setCart={setCart} />} path='/favourite'/>
        </Routes>
    </div>
  )
  
}

export default UserPortal