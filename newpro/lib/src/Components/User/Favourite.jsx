import React from 'react'
import '../../styles/Favourite.css'
const Favourite = ({ cart, setCart }) => {
  return (
    <div className='Favourite'>
      {cart.map(data => {
        return (
          <div className="Fav_book">
            <div className="img">
              <img src={data.thumbnailUrl} alt="" />
            </div>
            <div className="cont">
            <h1>title:{data.title}</h1>
            <h1>{data.authors}</h1>
            </div>
          </div>
        )

      }
      )
      }
    </div>
  )
}

export default Favourite

// import React from 'react'

// const Favourites = ({cart,setcart,count,setcount}) => {

//     const handelCart =(data,i,count,setcount)=>{
//           let updatedvalue = cart.filter((elem,index)=>{
//             return   index !== i
//           })
//           setcart(updatedvalue)
//           setcount(count -1)
//           alert(`${data.title} book removed from favourite`)
//     }
//   return (
//     <div>
//     <div className="favorites">
    
//     {
//         cart.map((data,i)=>{
//             return (

//                 <React.Fragment>
//                 <div className="fav_book">
//                 <div style={{height:"700px",width:'800px',border:'solid black',display:'flex',gap:'20px',justifyContent:'center',alignItems:"center",padding:'10px'}} className="image">
//                 <div className="firstimage">
//                          <img   id='mapimg' src={data.thumbnailUrl} alt="" />
//                 </div>
//                 <div style={{display:"flex",flexDirection:"column",justifyContent:'cenetr',fontSize:'20px'}} className="description">
                       
//                 <h1>Title: {data.title}</h1>
//                 <h4>Author: {data.authors}</h4>
//                 <h5>Categories: {data.categories}</h5>
//                 <h5>PageCount: {data.pageCount}</h5>
//                 <span style={{display:"flex",flexDirection:"row",justifyContent:'space-around',gap:'20px'}}>
               
//              <button onClick={()=>handelCart(data,i,count,setcount)} className='btn1'>Remove from Favourites</button>
//                 </span>
//                 </div>
       
//        </div>
                
                
//                 </div>
                
                
//                 </React.Fragment>
//             )
//         })
//     }
    
//     </div>
    
//     </div>
//   )
// }

// export default Favourites