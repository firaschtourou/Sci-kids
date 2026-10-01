import React from 'react';
import CircleDecoration from './CircleDecoration';
import './phy.css';
import physic from './phys.png'

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
    <div className="topicContainerPhy">
      <div className="mainCardPhy">
        <div className="decorationGroupPhy">
          <CircleDecoration size={decorations[0]} />
          <div className="decorationSubGroupPhy">
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className="contentWrapperPhy">
          <h2 className="topicTitlePhy">physical</h2>

          
          <div className="decorationWrapperPhy">
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
            <div className='photoPhy'><img  src={physic} alt='physic' /> </div>
          </div>
        </div>
      </div>
      <div className="scoreCardPhy">
        <CircleDecoration size={decorations[5]} />
        <div className="scoreWrapperPhy">
          <div className="scoreContentPhy">
            <span className="scoreValuePhy">18</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;