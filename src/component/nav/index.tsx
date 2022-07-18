import React,{ useRef, useEffect} from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import About from "../homeContent/about";

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
    else{ // 메뉴창 열림
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
          <Link to='/about'>
            <button id="btn1">ABOUT US</button>
            <div className="dot"></div>
          </Link>
        </div>
        <div className="block">
          <Link to='/about'>
          <button id="btn2" onClick={() => alert('모집 마감')}>RECRUITING</button>
          <div className="dot"></div>
          </Link>
        </div>
        <div className="block">
          <Link to='/about'>
          <button id="btn3"  >MEMBERS</button>
          <div className="dot"></div>
          </Link>
        </div>
        <img onClick={openNav} className="nav-mobile-hamburger"style={{ width: "25px", height: 'auto'}} src="./menu.png" />
      </div>
    </div>
    <div ref={(e:any) => (navRefs.current = e)} className="nav-mobile-menu">
      <ul>
      <Link to='/about'>
        <li>ABOUT US</li>
      </Link>
      </ul>
      <ul>
        <li onClick={() => alert('모집 마감')}>RECRUITING</li>
      </ul>
      <ul>
        <li>MEMBERS</li>
      </ul>
    </div>
    </div>
  );
}

export default Nav;
