import React,{ useRef,useState,useEffect} from 'react';
import "./index.css";
import { BrowserRouter, Route,Routes, useNavigate,Outlet,Link, Navigate } from 'react-router-dom';
function Nav() {
  const navRefs = useRef<any>();
  var flag=0;
  
  useEffect(()=>{
    window.addEventListener('resize',handleResize);
    return()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[]);
  const handleResize = () => { 
    if(window.innerWidth>=768){
      flag=0;
      navRefs.current.style="display:none;";
    }   
  }
  
  const openNav=()=>{
    if(flag==0){ //만약 메뉴창이 닫혀있을때
      navRefs.current.style="display:block;";
      flag=1;
    }
    else{
      navRefs.current.style="display:none;";
      flag=0;
    }
  }
  return (
    <div>
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
        <img onClick={openNav} className="nav-mobile-hamburger"style={{ width: "28%" }} src="./Mask group.png" />
      </div>
    </div>
    <div ref={(e:any) => (navRefs.current = e)} className="nav-mobile-menu">
      <ul>
        ABOUT US
      </ul>
      <ul>
        RECRUITING
      </ul>
      <ul>
        MEMBERS
      </ul>
    </div>
    </div>
  );
}

export default Nav;
