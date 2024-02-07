import React, { useState, useEffect } from 'react'
import "../styles/videos.css"
import Navbar from '../Navbar/Navbar'
import Categories from '../Categories/Categories'

const Videos = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/videos')
            let data = await response.json()
            setUsers(data)
        }
        fetchData()
    }, [])

    // let [state, setState] = useState(users)

    // let handleDeleteVideo=(id)=>{
    //     setState(state.filter((data)=> id!==data.id))

    // }
    // console.log(videos.length)  
    return (
        <>
            <Navbar />
            <Categories/>
            <div className="videos">
                {users.map((data, i) => (
                    <>
                        <div className="video" key={i}>
                            <div className="Thumnail">
                                <img src={data.Thumbnail} alt="" />
                            </div>
                            <div className="details">
                                <div className="icon">
                                    <img src={data.ChennalIcon} alt="" />
                                    <div className="title_details">
                                        <h4>{data.Title}</h4>
                                    </div>
                                </div>
                                <div className="ChennalName">
                                    <p>{data.ChennalName}</p>
                                    <div className="Views">
                                        <a className="a1" href="">{<p>{data.Viewes}</p>}</a>
                                        {/* <a onClick={()=>handleDeleteVideo(data.id)}>Delete</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>

                ))
                }
            
            </div>
        </>
    )
}

export default Videos