import React from 'react';
import './index.css';

function Nav() {
    return (
      <div className="nav">
        <div className='nav-img'>
            <img style={{width:'28%'}} src="./Mask group.png"/> 
            <img style={{width:'72%'}} src="./EWHA-CHAIN.png"/>
        </div>
        <div className="nav-btn">
            <button>ABOUT US</button>
            <button>RECRUITING</button>
            <button>MEMBERS</button>
        </div>
      </div>
    );
  }
  
  export default Nav;