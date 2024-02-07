import React, { useRef } from 'react'
import '../../styles/AddUsers.css'

const AddUsers = () => {

  let fname = useRef()
  let lname = useRef()
  let mail = useRef()
  let phone = useRef()
  let age = useRef()

  let addUser = (e) => {
    e.preventDefault()

    let users = {
      fname: fname.current.value,
      lname: lname.current.value,
      mail: mail.current.value,
      phone: mail.current.value,
      age: age.current.value
    }

    fetch("http://localhost:4000/users", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(users)
    })
    alert("User Added Successfully...")
  }



  return (
    <div className='AddUsers'>
      <form onSubmit={addUser}>
        <h1 id='ur'>Add Users</h1>
        <input ref={fname} type="text" placeholder='Enter First Name' /> <br /> <br />
        <input ref={lname} type="text" placeholder='Enter Last Name' /> <br /> <br />
        <input ref={mail} type="text" placeholder='Enter Mail' /> <br /> <br />
        <input ref={phone} type="text" placeholder='Enter Phone Num' /> <br /> <br />
        <input ref={age} type="text" placeholder='Enter age' /> <br /> <br />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default AddUsers