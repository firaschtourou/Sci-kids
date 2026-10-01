import React from 'react';
import CircleDecoration from './CircleDecoration';
import './french.css';
import french from './french.png';

const decorations = [
  { width: '18px', height: '13px' },
  { width: '12px', height: '8px' },
  { width: '31px', height: '14px' },
  { width: '28px', height: '20px' },
  { width: '71px', height: '49px' },
  { width: '16px', height: '12px' },
  { width: '10px', height: '7px' },
  { width: '34px', height: '25px' }
];

const MathTopic = () => {
  return (
    <div className="topicContainer2">
      <div className="mainCard2">
        <div className="decorationGroup2">
          <CircleDecoration size={decorations[0]} />
          <div className="decorationSubGroup2">
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className="contentWrapper2">
          <h2 className="topicTitle2">French</h2>
          <div className="decorationWrapper2">
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
                        <div className='photo2'><img  src={french} alt='french' /> </div>
          </div>
        </div>
      </div>
      <div className="scoreCard2">
        <CircleDecoration size={decorations[5]} />
        <div className="scoreWrapper2">
          <div className="scoreContent2">
            <span className="scoreValue2">20</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;