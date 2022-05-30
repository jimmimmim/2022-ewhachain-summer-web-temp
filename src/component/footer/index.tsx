import React from 'react';
import './index.css';
function Footer() {
  const footerUrls=['https://www.linkedin.com/in/ewha-chain-%EC%9D%B4%ED%99%94%EC%B2%B4%EC%9D%B8-09391722a/','https://instagram.com/ewha.chain?igshid=YmMyMTA2M2Y=','https://medium.com/ewha-chain','https://twitter.com/ewhachain?s=11&t=5-P0NSQIdUVtqId-GT6yZw'];
  const footerImgs =['./linkedin_logo.png','./instagram_logo.png','./medium_logo.png','./Twitter_logo.png'];
  
  const footerImgList = footerImgs.map((footerImg,index)=><img style={{width:'15%'}} onClick={()=>window.open(footerUrls[index]) } src={footerImg}/>)
  
  return (
      <div className='footer'>
        <div className='footer-txt'>
          <h1>EWHA-CHAIN</h1>
          <h3><a href="mailto:ewha.chain@gmail.com">ewha.chain@gmail.com</a></h3>
        </div>
        <div className='footer-img'>
          {footerImgList}
        </div>

      </div>
    );
  }
  
  export default Footer;