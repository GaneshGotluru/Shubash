import React from 'react'
import { useState } from 'react'

const State = () => {
    let [count, setCount] = useState(0)

    let Inc = () => {
        setCount(count + 1)
        // setCount(count++)  double time work
    }
    let Dec = () => setCount(count - 1)
    let res = () => setCount(count = 0)


    let [name, setName] = useState('ReactJS')

    // let change=()=> setName("Nodejs")
    return (
        <>
            <div className="examples">
                <h1 style={{ textAlign: 'center' }}>{name}</h1>
                {/* <button onClick={change}>change</button> */}
                <button onClick={() => setName("Node js")}>change</button>
            </div>


            <div className="IncDecRes">
                <h1>{count}</h1>
                <button onClick={Inc}>Increment</button>
                <button onClick={res}>reset</button>
                <button onClick={Dec}>Decrement</button>
            </div>
        </>
    )
}

export default State