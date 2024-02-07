import React from 'react'
import { useEffect,useState } from 'react'
const Server = () => {
    let [name,setName]=useState("REact js")
    let [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('useEffect is worked')
    },[count])

    
  return (
    <div className='server'>
        <h1>Server</h1>
        <h1>{name}</h1>
        <button onClick={()=>setName("Node Js")}>Change</button>

        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Change</button>
    </div>
  )
}

export default Server