import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/ReadBook.css'

const ReadBook = ({cart,setCart}) => {
  let params = useParams()
  let book_id = params.id

  let location = useLocation()
  let path = location.pathname.startsWith('/userPortal')
  let [book, setBook] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:4000/books/${book_id}`)
      let data = await response.json()
      setBook(data)
    }
    fetchData()
  })
  return (
    <>
      <div className="mainCont">
        <div className="poster">
          <img src={book.thumbnailUrl} alt="" />
        </div>
        <div className="desc">
          <h1>{book.title}</h1>
          ShortDesc:<p>{book.shortDescription}</p>
          LongDesc:<p>{book.longDescription}</p>
        </div>
        <div>
          <Link to={'/adminPortal/books'}>Backt to Books</Link>
          {path && <button onClick={()=>setCart([...cart,book])}>Add To Favourites</button> }
          
        </div>
      </div>

    </>
  )
}

export default ReadBook
