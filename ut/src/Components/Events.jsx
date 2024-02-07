import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Events = () => {
    

    let users = [
        { id:1,name: "Ganesh", age: 22 },
        { id:2,name: "Mahesh", age: 25 },
        { id:3,name: "Kalyan", age: 21 }
    ]

    let [x,setX]=useState(users)

    // let Submit = (x) => {
    //     console.log(`hi ${x}`)
    // }

    //  orrrrrrrr

    // function handleClick(x){
    //     // console.log("Hello world! ")
    //     console.log(`hi ${x}`)
    // }


    function handleShow(x,y){
        alert(`Hi ${x} your age is ${y}`)
        // document.writeln(`Hi ${x}`)
    }


    let handleRemove=(id,username)=>{

        
        setX(x.filter((data)=> id!==data.id))
        // console.log(x.filter((data)=> id!=data.id))
        
        alert(`${username} is Deleted`)
    }

    let duplicate=(id,name,age)=>{
        // users.push({id,name,age})
        setX([...x,{id,name,age}])
    }
     



    return (
        
        <div className='events'>
        
            {/* <button onClick={()=>handleClick("Ganesh")}>submit</button> */}

            {/* orr */}
            {/* <button onClick={()=>Submit("Ganesh")}>submit</button> */}

            


            {
                (x.length===0)? <h1>There are no users to display</h1>:
                x.map((data,i) => (
                <div className="user_list" key={i}>
                    <div className="user">
                        <h1>{data.name}</h1>
                        <h3>{data.age}</h3>
                        <button onClick={()=>handleShow(data.name,data.age)}>Show</button>
                        <button onClick={()=>handleRemove(data.id,data.name)}>Delete</button>
                        <button onClick={()=>duplicate(data.id,data.name,data.age)}>Duplicate User</button>
                        
                    </div>
                    <hr />
                </div>
            ))
            }
            <button onClick={()=>setX(x=[])}>Remove All</button>
        </div>
    )
}

export default Events