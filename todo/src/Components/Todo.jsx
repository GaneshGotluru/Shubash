import React, { useEffect, useRef, useState } from 'react'
import '../styles/Todo.css'

const Todo = () => {
    let [task, setTask] = useState([])
    let data = useRef()


    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/tasks')
            let data1 = await response.json()
            setTask(data1)
        }
        fetchData()
    })


    let handleSubmit = (e) => {
        e.preventDefault()


        let addTask = {
            task: data.current.value,
        }
        fetch('http://localhost:4000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addTask)
        })
        alert("Task Added Successfully")

    }


    let date = Date()

    let [x, setX] = useState(task)

    let duplicate = (id, name) => {

        console.log(id, name)
        alert(`duplicate${name}`)
    }

    let handleRemove = (id, name) => {


        setX(x.filter((data) => id !== data.id))


        alert(`${name} is Deleted`)
    }

    return (
        <div className='mainCont'>
            <h1>To-Do-Task</h1>
            <div className="c1">
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={data} onSubmit={() => console.log(data)} placeholder='Enter Task ' />
                    <button>Add</button>
                </form>

                <div className="">
                    {
                        task.map((x, i) => {
                            return (
                                <div className="desc" key={i}>
                                    <ul>
                                        <li><h1>{x.task}</h1></li>
                                    </ul>
                                    <p>{date}</p>
                                    <button onClick={() => handleRemove(x.id, x.name)}>Finish</button>
                                    <button onClick={() => duplicate(x.id, x.task)}>Duplicate</button>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>

    )
}

export default Todo