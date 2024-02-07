import React from 'react'
import Props2 from './Props2'
import { useState } from 'react';

const Props = () => {

    let x=10
    let course="React Js"

    let [count,setCount]=useState(x)

    let handleIncr=()=>{
        setCount(count+1)
    }

    let greet=()=>{
        alert("Hello")
    }
    
  return (
    <div className='props'>
        <h1>Props1</h1>
        <h2>{count}</h2>
        <button onClick={handleIncr}>Increment</button>
        <button onClick={greet}>Get an alert</button>
        <p>we are passing data from parent(Props1) component to child (props2)component</p>
        {/* <Props2 score={x} sub={course}/> */}
        <Props2 score={x} fn={greet}/>

        
    </div>
  )
}

export default Props