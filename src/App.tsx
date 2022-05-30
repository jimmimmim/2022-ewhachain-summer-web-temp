import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Slogan from './component/homeContent/slogan';
import OurMission from './component/homeContent/ourMission';
import Who from './component/homeContent/who';
import OurExcecutives from './component/homeContent/ourExecutives';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Slogan/>
      <OurMission/>
      <Who/>
      <OurExcecutives/>
      <Footer/>
    </div>
  );
}

export default App;
