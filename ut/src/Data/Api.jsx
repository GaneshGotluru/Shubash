import React, { useEffect, useState } from 'react'

const Api = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData= async()=>{
            let response=await fetch('http://localhost:4000/users')
            let data= await response.json()
            setUsers(data)
        }
        fetchData()
    },[])
 
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/users")
    //     .then((res)=setUsers(res))
        
    // },[])
    
  return (    <div>
        <h1>Display all the user</h1>
        {
            users.map((data)=>{
                // console.log(data)
                return <div className="">
                    <h1>{data.username}</h1>
                    <button onClick={()=>setUsers(users.filter((x)=>x.id!==data.id))}>Delete</button>
                </div>
            })
        }
    </div>

  )
}

export default Api