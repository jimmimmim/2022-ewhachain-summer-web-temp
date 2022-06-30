import React from 'react';
import './index.css';
import About from "../about"
import { Link } from 'react-router-dom';
function Who() {
  
    return (
      <div className='who'>
        <div className='who-div1' id='whodiv1'>
          <div className='square-who' id='sqwho1'></div>
           <Link to='./slogan_tab'>
            <p className='who-p1'>who we are</p>
            </Link>
        </div>
        <div className='who-div2' id='whodiv2'>
          <div className='square-who' id='sqwho2'></div>
          <Link to='./activities'>
          <p className='who-p2'>what we do</p>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Who;