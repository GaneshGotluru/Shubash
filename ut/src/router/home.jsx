import React, { useEffect, useState } from 'react'

const Home = () => {
  let [users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData= async()=>{
            let response=await fetch('http://localhost:4000/users')
            let data= await response.json()
            setUsers(data)
        }
        fetchData()
    },[])
  return (
    <div className='home' style={{textAlign:'center'}}>
        <h1 style={{textAlign:'center'}}>Home page</h1>
        <div>
        <h1>Display all the user</h1>
        {
            users.map((data,i)=>{
                // console.log(data)
                return <div className="" key={i}>
                    <h1>{data.username}</h1>
                    <button onClick={()=>setUsers(users.filter((x)=>x.id!==data.id))}>Delete</button>
                </div>
            })
        }
    </div>
    </div>
  )
}

export default Home