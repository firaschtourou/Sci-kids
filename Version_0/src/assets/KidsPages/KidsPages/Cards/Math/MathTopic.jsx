import React from 'react';
import CircleDecoration from './CircleDecoration';
import './math.css';
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

// Tableau des classes de couleurs disponibles
const cardColors = ['cardBlue', 'cardPink', 'cardGreen', 'cardyellow'];

const MathTopic = ({ className, index }) => {
  // Sélectionner une couleur en fonction de l'index
  const cardColor = cardColors[index % cardColors.length];

  return (
    <div className={`topicContainermath ${cardColor}`}>
      <div className="mainCardmath">
        <div className="decorationGroupmath">
          <CircleDecoration size={decorations[0]} />
          <div className="decorationSubGroupmath">
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className="contentWrappermath">
          <h2 className="topicTitlemath">{className}</h2>
          <div className="decorationWrappermath">
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
            <div className='photomath'>
              <img src={science} alt='science' />
            </div>
          </div>
        </div>
      </div>
      <div className="scoreCardmath">
        <CircleDecoration size={decorations[5]} />
        <div className="scoreWrappermath">
          <div className="scoreContentmath">
            <span className="scoreValuemath">20</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;