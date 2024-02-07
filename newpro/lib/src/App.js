import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminPortal from './Components/Admin/AAdminPortal';
import UserLogin from './Components/User/UserLogin';
import UserPortal from './Components/User/UserPortal';

function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<AdminLogin />} path='/adminLogin' />
          <Route element={<AdminPortal />} path='/adminPortal/*' />

          <Route element={<UserLogin/>} path='/userLogin' />
          <Route element={<UserPortal/>} path='/userPortal/*' />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
