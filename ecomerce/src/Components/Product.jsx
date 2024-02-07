import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = ({ cart, setCart }) => {
    let [product, setProduct] = useState([])
    let params = useParams()
    let id = params.id

    useEffect(() => {
        // let fetchData=async()=>{
        //     let response=  await fetch('https://dummyjson.com/products')
        //     let data= await response.json()
        //     setProducts(data.products)
        //    }
        //    fetchData()

        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [id])

    // let addToCart=()=>{
    //     cart.map(x=>{
    //         if(x.id===product.id){
    //             alert('product already present in the cart ')
    //         }
    //         else{
    //             setCart([...cart,setCart])
    //         }
    //     })
    // }
    return (
        <div className='Product' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="">
                <img src={product.thumbnail} alt="" />
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <button style={{ background: 'black', color: 'white', borderRadius: '10px', padding: '20px' }}>Add to cart</button>
                    <button style={{ background: 'black', color: 'white', borderRadius: '10px', padding: '20px' }}>Back</button></div>
            </div>
        </div>
    )
}

export default Product