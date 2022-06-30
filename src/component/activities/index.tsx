import React from 'react';
import './index.css';

function Activities() {
    return (
      
      <div className='activities'>
                <div className='curriculum'>
        <div>
                <h1 className='slogan_title'>Curriculum</h1>
            </div>
            <div className='wrapper-circle'>
                <div className='circle' id='circle-1of3'>
                    <div className='session'>
                        교육 세션
                    </div>
                    <div className='horizontal-line'></div>
                    <div className='session-detail'>
                    블록체인의<br/>
                    정확한 이해를 위한 세션
                    </div>
                </div>
                <div className='circle' id='circle-2of3'>
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
            </div>
            <div className='wrapper-circle'>
                <div className='circle' id='circle-3of3'>
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
        <h1 className='slogan_title'>Activities</h1>
        <div className='wrapper'>
          <div className='containter'>
            <div className='grid'>
              <div className='rect-cont' id='rect1of6'>
                <img className='rect-icon' alt="webinar" src="webinar.png"/>
                <div className='rectangle'>
                  <div className='act'>
                    블록체인 입문자를 위한<br/>웨비나 개최
                  </div>
                  <div className='act-detail'>
                  이화체인은 매학기 리쿠르팅 시즌에 웨비나를 학회 설명회와 함께 진행합니다.<br/><br/>
지금까지 개최한 웨비나에서는 전 디사이퍼 학회장 오세진 연사님, VMware 박세열 교수님, 크립토서울 에리카 강 연사님, 빗썸 코리아 허미아 연사님, 레드윗 김지원 연사님을 모셔서 세션을 진행했습니다.<br/><br/> 
그외에도 학회원들이 직접 준비한 블록체인 기초 세션이 진행되며, 웨비나를 통해 블록체인 업계에 종사하고 계신 이화여대 선배님과도 교류하고 있습니다. 
                  </div>
                </div>
              </div>
              <div className='rect-cont' id='rect2of6'>
                <img className='rect-icon' alt="webinar" src="network.png"/>
                <div className='rectangle'>
                <div className='act'>
                국내 대학 & 기업과의<br/>네트워킹
                  </div>
                  <div className='act-detail'>
                  이화체인은 블록체인 대학 연합회 소속으로 블록체인 정책 대담회에서 의견을 제시했습니다.<br/><br/> 

“BlockchainEwhaYonseiOND”
연세대학교 블록체인 학회와 BEYOND라는 팀을 구성에 ‘CELO’와 ‘FLOW’ 블록체인을 활용한 어플리케이션을 기획, 개발하는 프로젝트를 진행했습니다.<br/><br/>

DSRV, 한화 드림플러스 등의 국내 여러 기업들과의 MOU 및 실무 연계도 진행됩니다.<br/><br/>   
                  </div>
                </div>
              </div>
              <div className='rect-cont' id='rect3of6'>
                <img className='rect-icon' alt="webinar" src="presentation.png"/>
                <div className='rectangle'>
                <div className='act'>
                각종 해커톤 & 공모전 참가<br/>
                  </div>
                  <div className='act-detail'>
                  학기 내 개발세션 커리큘럼을 통해 각종 해커톤에 참여합니다. 학회원들 간의 자유로운 팀 구성이 가능해 자율적으로 참가하기도 합니다. <br/><br/>

학회 내에서는 아이디어 컨테스트가 매학기 진행됩니다. 컨테스트에서 직접 기획에 참가하며 블록체인 생태계를 배울 수 있습니다. 우수 프로젝트로 선정되면 개발까지 진행하며 프로젝트 경험을 쌓을 수 있습니다. <br/><br/>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid'>
            <div className='rect-cont' id='rect4of6'>
                <img className='rect-icon' alt="webinar" src="seminar.png"/>
                <div className='rectangle'>
                <div className='act'>
                    블록체인 업계<br/>
                    연사 초청 세미나
                  </div>
                  <div className='act-detail'>
                  DSRV의 김지윤 대표님, Ground X의 Scott님, 연세대학교 블록체인 학회 학회장 심석현님 등이 세션에 함께해주셨습니다.<br/><br/>

이외에도 이화체인은 각종 블록체인 스타트업에서 연사를 초청하여 학회원들이 블록체인 업계에 직접적으로 발을 담글 수 있는 기회를 제공하고 있습니다. <br/><br/>

다수의 현 블록체인 업계 연사 초청 강연을 통해 블록체인 산업에 대한 지식과 업계 현황 정보 등을 습득합니다. <br/><br/>
                  </div>
                </div>
              </div>
              <div className='rect-cont' id='rect5of6'>
                <img className='rect-icon' alt="webinar" src="chain.png"/>
                <div className='rectangle'>
                <div className='act'>
                    블록체인 코어 개발<br/>  
                  </div>
                  <div className='act-detail'>
                  코어 스터디로 시작하여 직접 학회 내 자체 코어 개발을 진행하고 있습니다. <br/><br/>

학회원들 간 정기적인 세미나 개최를 통해 개발 진행사항을 미디엄에 연재하고 있습니다. 
                  </div>
                </div>
              </div>
              <div className='rect-cont' id='rect6of6'>
                <img className='rect-icon' alt="webinar" src="project.png"/>
                <div className='rectangle'>
                <div className='act'>
                    TF 구성을 통한<br/>다양한 프로젝트 진행
                  </div>
                  <div className='act-detail'>
                  학기 정기 커리큘럼 외에도 TF를 구성해 여러 프로젝트를 진행합니다.<br/><br/>

<ul>
  <li>이화체인 사이트제작 TF</li>
  <li>이화체인 웨비나 TF</li>
  <li>이화체인 굿즈 TF</li>
  <li>이화체인 정책대담회 TF</li>
</ul>
<br/>현재까지는 위와 같은 TF가 구성되어 활동한 바가 있습니다. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Activities;