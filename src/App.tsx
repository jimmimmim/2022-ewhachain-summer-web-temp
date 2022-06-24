import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Slogan from './component/homeContent/slogan';
import OurMission from './component/homeContent/ourMission';
import Who from './component/homeContent/who';
import OurExcecutives from './component/homeContent/ourExecutives';
import Activities from 'component/whatContent/activities';
import Curriculum from 'component/whatContent/curriculum';
import Footer from './component/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Slogan_tab from 'component/homeContent/slogan_tab';

function App() {
  return (
      <div className="App">
        <Nav/>
        <Slogan/>
        <OurMission/>
        <Who/>
        <OurExcecutives/>
        <Curriculum/>
        <Activities/>
        <Slogan_tab/>
        <Footer/>
      </div>

  );
}

export default App;
