import React from 'react';
import './index.css';
import Nav from '../../nav';
import Footer from '../../footer';


function About() {
    return (
      <div>
      <Nav/>
      <div className='slogan_tab'>
        <p className='slogan_title'>SLOGAN</p>
        <div className='slogan_flex'>
         <div className='slogan_right'>
          <p className='greentext'>ABOUT,</p>
          <p className='whitetext'>국내 최고의 블록체인 학회로의 성장</p>
          <p className='greentext'>Where Chain Begins,</p>
          <p className='whitetext'>기획과 개발이 함께<br/>
            블록체인 산업에<br/>
            최적화된 프로젝트 진행</p>
          <p className='greentext'>We are Chainers.</p>
          <p className='whitetext'>자신 있게 자랑할 수 있는 학회,<br/>
            그리고 이화체이너들</p>
          </div>
          <div className='slogan_quote'>
            <h4>"Where Change Begins,<br/>
            Where Chain Begins,<br/>
            We are Chainers."
            </h4>
          </div>
        </div>
        <div className="portfolio">
          <p className='slogan_title'><br/>
          MORE ABOUT</p>
          <img className="portfolio_img" alt="portfolio_1" src="./portfolio_1.png" />
          <img className="portfolio_img" alt="portfolio_2" src="./portfolio_2.png" />
          <br/>
          <button onClick={() => window.open('https://drive.google.com/file/d/1Zk-anV_7sw30PcZ1NeuPBv9kZSZDCOW1/view', '_blank')}>소개집 보러가기</button>
        </div>
        <Footer/>  
      </div>
      
      </div>
    );
  }
  
  export default About;