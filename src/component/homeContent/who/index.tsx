import React from 'react';
import './index.css';
import {Link} from "react-router-dom"
import About from "../../pages/About"

function Who() {
    return (
      <div className='who'>
        <div className='who-div1' id='whodiv1'>
          <div className='square-who' id='sqwho1'></div>
          <a href="#;">
            <p className='who-p1'>who we are</p>
          </a>
        </div>
        <div className='who-div2' id='whodiv2'>
          <div className='square-who' id='sqwho2'></div>
          <p className='who-p2'>what we do</p>
        </div>
      </div>
    );
  }
  
  export default Who;