import React from 'react';
import './index.css';
import {Link} from "react-router-dom"
import About from "../../pages/About"

function Who() {
    return (
      <div className='who'>
        <div className='who-div1'>
          <div className='square-who'></div>
          <a href="#;">
            <p className='who-p1'>who we are</p>
          </a>
        </div>
        <div className='who-div2'>
          <div className='square-who'></div>
          <p className='who-p2'>what we do</p>
        </div>
      </div>
    );
  }
  
  export default Who;