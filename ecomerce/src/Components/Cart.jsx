import React from 'react'

const Cart = ({ cart, setCart }) => {
  let subTotal = cart.reduce((sum, x) => {
    return sum + x.price
  }, 0)
  return (
    <div>
      {
        cart.map((data) => {
          return (
            < div >
           <img src={data.thumbnail} alt="" />
           <h1>{data.title}</h1>
          </div>
          )
            
        })
      }
<h1>Sub Total: Rs.{subTotal}</h1>
    </div >
  )
}

export default Cart