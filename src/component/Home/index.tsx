import React from 'react';
import Nav from '../nav';
import Slogan from '../homeContent/slogan';
import OurMission from '../homeContent/ourMission';
import Who from '../homeContent/who';
import Footer from '../footer';
import OurExecutives from '../homeContent/ourExecutives';


function Home1() {
  
  return (
      <div>
        <Nav/>
        <Slogan/>
        <OurMission/>
        <Who/>
        <OurExecutives/>
        <Footer/>
      </div>

  );
}

export default Home1;
