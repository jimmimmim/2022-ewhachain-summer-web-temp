import React from 'react';
import './index.css';
function Slogan() {
    return (
      <div className='slogan'>
        <div className='toFlex'>
          <div className='left'>
            <div className="square-slogan"></div>
            <p className='slogan-1'>Where Change Begins,<br/>
                Where chain begins,<br/>
                We are chainers.</p>
            <p className='slogan-2'>Where We Lead The Industry of Blockchain</p>
            <button>Apply</button>
          </div>
          <div className='right'>
            <video
              src="/sampleVideo.mp4"
              width="450"
              height="300"
              loop autoPlay
              >
            </video>
          </div>
        </div>
      </div>
    );
  }
  
  export default Slogan;