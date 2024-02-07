import './App.css';
import Events from './Components/Events';
import State from './Components/State';
import Categories from './Categories/Categories';
import Navbar from './Navbar/Navbar';
import Videos from './Videos/Videos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Props from './Components/Props';
import NavbarHome from './Components/NavbarHome';
import Assign from './Components/Assign';
import Server from './Components/Server';
import Api from './Data/Api';
import Home from './router/home';
import About from './router/about';
import Contact from './router/contact';
function App() {
  return (
    <>
      {/* <>
        <Server />
        <Api />
      </> */}

      {/* <BrowserRouter>
        <NavbarHome />
        <Routes>
          <Route path='/' element={<Props />} />
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/state' element={<State />} />
          <Route path='/event' element={<Events />} />
          <Route path='/video' element={<Videos />} />
          <Route path='/categorie' element={<Categories/>}/>
          <Route path='/assign' element={< Assign />} />
          <Route path='/usersdom' element={<Server />} />


        </Routes>

      </BrowserRouter> */}

      <div className='App'>
        <BrowserRouter>
        <NavbarHome/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />


          </Routes>

        </BrowserRouter>

      </div>
    </>

  );
}

export default App;
