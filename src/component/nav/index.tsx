import React from "react";
import "./index.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-img">
        <img style={{ width: "28%" }} src="./Mask group.png" />
        <img style={{ width: "72%" }} src="./EWHA-CHAIN.png" />
      </div>
      <div className="nav-btn">
        <div className="block">
          <button id="btn1">ABOUT US</button>
          <div id="dot1"></div>
        </div>
        <div className="block">
          <button id="btn2">RECRUITING</button>
          <div id="dot2"></div>
        </div>
        <div className="block">
          <button id="btn3">MEMBERS</button>
          <div id="dot3"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
