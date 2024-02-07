import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    let [products,setProducts]=useState([])
    useEffect(()=>{
        // let fetchData=async()=>{
        //     let response=  await fetch('https://dummyjson.com/products')
        //     let data= await response.json()
        //     setProducts(data.products)
        //    }
        //    fetchData()

        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data.products))
    },[])
  return (
    <div>
        <h1>Home</h1>
        {
            products.map((data)=>{
                return (
                    <div className="products">
                        <h1>{data.title}</h1>
                        <div className="">
                        {/* <img src={data.thumbnail} alt="" /> */}
                        </div>
                        <div className="">
                            <Link to={`/${data.id}`}>View</Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home