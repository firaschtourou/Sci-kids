import React from 'react';
import CircleDecoration from './CircleDecoration';
import './science.css';
import science from './science.png';
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
    <div className="topicContainer">
      <div className="mainCard">
        <div className="decorationGroup">
          <CircleDecoration size={decorations[0]} />
          <div className="decorationSubGroup">
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className="contentWrapper">
          <h2 className="topicTitle">Science</h2>
          <div className="decorationWrapper">
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
            <div className='photo'><img  src={science} alt='science' /> </div>
          </div>
        </div>
      </div>
      <div className="scoreCard">
        <CircleDecoration size={decorations[5]} />
        <div className="scoreWrapper">
          <div className="scoreContent">
            <span className="scoreValue">20</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;