import React from 'react';
import './index.css';

function Curriculum() {
    return (
        <div className='curriculum'>
            <div>
                <h1>Curriculum</h1>
            </div>
            <div className='wrapper'>

            <div className='circle'>
                <div className='session'>
                    교육 세션
                </div>
                <div className='horizontal-line'></div>
                <div className='session-detail'>
                블록체인의<br/>
                정확한 이해를 위한 세션
                </div>
            </div>
            <div className='circle'>
            <div className='session'>
                    개발 세션
                </div>
                <div className='horizontal-line'></div>
                <div className='session-detail'>
                블록체인 개발을 위한 교육<br />
                다양한 연사 초청을 통해 만나는 실무<br />
                컨테스트를 통한 블록체인 응용앱 기획<br />
                이화체인 Alumni와의 네트워킹
                </div>
            </div>
            <div className='circle'>
            <div className='session'>
                    방학 세션
                </div>
                <div className='horizontal-line'></div>
                <div className='session-detail'>
                실제 프로젝트 진행<br />
                경험을 위한 세션
                </div>
            </div>
      </div>
            </div>
    );
  }
  
  export default Curriculum;