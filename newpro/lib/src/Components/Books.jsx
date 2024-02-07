import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Books.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {
  let [books, setBooks] = useState([])
  let navigate=useNavigate()
  let location= useLocation()
  let path=location.pathname.startsWith('/adminPortal')

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:4000/books')
      let data = await response.json()
      setBooks(data)
    }
    fetchData()
  }, [books])

  let readBook=(id)=>{
    if(path){
      navigate(`/adminPortal/books/${id}`)
    }
    else{
      navigate(`/userPortal/books/${id}`)
    }
  }

  let handleDelete=(id,title)=>{
    fetch(`http://localhost:4000/books/${id}`,{
      method:"DELETE"
    })
    alert(`${title} got Deleted`)
  }

  return (
    <div className='Books'>
      <h1>Books Colletcion</h1>
      <div className="books">
        {books.map((data) => {
          return (
            <div className="book">
              <div className="b1">
                <img src={data.thumbnailUrl} alt="" />
              </div>
              <div className="b2">
                <div className="b3sub">
                  Titile:{data.title} <br />
                  Authors: {data.authors} <br />
                  Categories: {data.categories} <br />
                  PageCount: {data.pageCount} <br />
                  <div className="">
                    <button onClick={()=>readBook(data.id)}>Read Book</button>
                    {path && <button onClick={()=>handleDelete(data.id,data.title)}>Delete Book</button>}
                    
                  </div>

                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Books



