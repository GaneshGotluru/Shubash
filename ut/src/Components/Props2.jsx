import React from 'react'

const Props2 = ({score,fn}) => {
    // console.log(x)
  return (
    <div>
        <h1>Props2</h1>
        <h2>{score}</h2>
        <button onClick={fn}>Get an alert</button>
        {/* <h2>{sub}</h2> */}
    </div>
  )
}

export default Props2