import React, { useEffect, useState } from 'react'
import '../../styles/Users.css'

const Users = () => {
  let [user, setUser] = useState([])

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/users");
      let data = await response.json()
      setUser(data)
    }
    fetchData()
  })
  return (
    <div className='mainuser'>
      {
       user.map((data)=>{
        return (
          <div className="childuser">
            <div className="userdata">
            <h1>First Name:{data.fname}</h1>
            <h1>Last Name:{data.lname}</h1>
            <h1>Mail:{data.mail}</h1>
            <h1>Phone: {data.phone}</h1>
            </div>
          </div>
        )
       })
        
      }
    </div>
  )
}

export default Users