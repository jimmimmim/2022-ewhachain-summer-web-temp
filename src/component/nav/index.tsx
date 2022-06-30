import React from "react";
import "./index.css";
import { BrowserRouter, Route,Routes, useNavigate,Outlet,Link, Navigate } from 'react-router-dom';
function Nav() {
  
  const goHome=()=>{
    console.log("냥");
  }
  return (
    <div className="nav">
      <div className="nav-img">
      <Link to='/'>
      
        <img style={{ width: "28%" }} src="./Mask group.png" />
        <img style={{ width: "72%" }} src="./EWHA-CHAIN.png" />
      
      </Link>
      </div>
      <div className="nav-btn">
        <div className="block">
          <button id="btn1">ABOUT US</button>
          <div className="dot"></div>
        </div>
        <div className="block">
          <button id="btn2" >RECRUITING</button>
          <div className="dot"></div>
        </div>
        <div className="block">
          <button id="btn3" >MEMBERS</button>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
