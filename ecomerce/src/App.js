import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Product from './Components/Product';
import { useState } from 'react';

function App() {
  let[cart,setCart]=useState([])


  return (

      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Cart cart={cart} setCart={setCart} />} path='/cart'/>
      <Route element={<Product cart={cart} setCart={setCart} />} path='/:id'/>


      </Routes>
      </BrowserRouter>

  );
}

export default App;
