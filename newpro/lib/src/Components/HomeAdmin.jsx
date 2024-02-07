import React from 'react'
import '../styles/HomeAdmin.css'

const HomeAdmin = () => {
  return (
    <>

      <div className='homepage'>
        <div>
          <img className='img2' src="/images/h2.jpg" alt="" />
          <small className='h15'></small>
          <span className='h16'><u style={{ textDecorationColor: 'chocolate' }}>Digital Library</u></span>
          <span className='h17'>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital Library for 24/7 <br /> access to eBooks, audiobooks, magazines, movies, music, learning and more.</span>
          <button className='butn'>Get Started</button>
        </div>
        <div>
          <img className='img3' src="/images/h1.jpg" alt="" />
          <small className='h18'></small>
          <span className='h19' >ABOUT</span>
          <small className='h20'><u style={{ textDecorationColor: "green" }}>Cos Cob Library Renovation</u></small>
          <small className='h21'>Greenwich Library recently announced a new plan for the much-anticipated Cos Cob Branch <br /> Library renovation. The revised plan considers ideas raised by the community to expand the <br /> community room for greater program capacity, increase space dedicated to children’s services, <br /> and enhance the collections to make it a go-to destination. </small>
          <button className='butn1'>learn more</button>
        </div>

      </div>
   
    </>
  )
}

export default HomeAdmin



