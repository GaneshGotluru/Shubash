import React, { useRef } from 'react'

const About = () => {
  let data=useRef()
  let submitUsers=(e)=>{
    // console.log(data.current.value)
    let user={
      username:data.current.value
    }
    fetch("http://localhost:4000/users",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(user)
    })

    e.preventDefault()
  }
  return (
    <div className='about' style={{textAlign:'center'}}>
        <h1>About</h1>
      <form onSubmit={submitUsers}>

      <input type="text" ref={data} placeholder='add new user' />
      <input type="text" />
      <button>Add User</button>

      </form>

    </div>
  )
}

export default About