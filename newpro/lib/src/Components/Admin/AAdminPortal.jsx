import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomeAdmin from '../HomeAdmin'
import Books from '../Books'
import Users from './Users'
import AddBooks from './AddBooks'
import AddUsers from './AddUsers'
import Navbar from '../Navbar'
import  ReadBook  from '../ReadBook'


const AdminPortal = () => {
  return (
    <div className='adminPortal'>
      <Navbar/>
      <Routes>
        <Route element={<HomeAdmin/>} path='/' />
        <Route element={<Books/>} path='/books' />
        <Route element={<Users/>} path='/users' />
        <Route element={<AddBooks/>} path='/addbooks' />
        <Route element={<AddUsers/>} path='/addusers' />
        <Route element={<ReadBook />} path='/books/:id'/>
      </Routes>
        
    </div>
  )
}

export default AdminPortal