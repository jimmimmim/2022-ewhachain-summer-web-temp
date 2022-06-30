import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Slogan from './component/homeContent/slogan';
import OurMission from './component/homeContent/ourMission';
import Who from './component/homeContent/who';
import OurExcecutives from './component/homeContent/ourExecutives';
import Activities from 'component/activities';
import Footer from './component/footer';
import { BrowserRouter, Route,Routes, useNavigate,Outlet } from 'react-router-dom';
import Slogan_tab from 'component/homeContent/slogan_tab';
import Home from 'component/Home';
function App() {
  
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/activities' element={<Activities/>}/>
          <Route path='/slogan_tab' element={<Slogan_tab/>}/>
          </Routes>
      </div>

  );
}

export default App;
