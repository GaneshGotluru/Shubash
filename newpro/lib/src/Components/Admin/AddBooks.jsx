import React, { useRef } from 'react'
import '../../styles/AddBooks.css'

const AddBooks = () => {
  let title = useRef()
  let thumbnailUrl = useRef()
  let authors = useRef()
  let pageCount = useRef()
  let categories = useRef()

  let addBook = (e) => {
    e.preventDefault()

    let book = {
      title: title.current.value,
      thumbnailUrl: thumbnailUrl.current.value,
      authors: authors.current.value,
      pageCount: pageCount.current.value,
      categories: categories.current.value
    }
    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    })
    alert("Book added sucessfully")
  }

  return (
    <div className='AddBooks' >
      <form onSubmit={addBook} >
        <h1  id='bk'>Add Book</h1>

        <input placeholder='Enter Title' ref={title} type="text" /> <br /> <br />

        <input placeholder='Enter thumbnailUrl' ref={thumbnailUrl} type="text" /> <br /> <br />

        <input placeholder='Enter authors' ref={authors} type="text" /> <br /> <br />

        <input placeholder='Enter pageCount' ref={pageCount} type="text" /> <br /> <br />

        <input placeholder='Enter categories' ref={categories} type="text" /> <br /> <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddBooks