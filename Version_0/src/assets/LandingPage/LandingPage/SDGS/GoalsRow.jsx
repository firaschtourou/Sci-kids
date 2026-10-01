import React from 'react';
import { GoalImage } from './GoalImage';
import './sdgs.css';

export const GoalsRow = ({ images, startIndex }) => {
  return (
    <div className="gridRow">
      {images.map((src, idx) => (
        <div key={src} className="gridColumn">
          <GoalImage src={src} index={startIndex + idx} />
        </div>
      ))}
    </div>
  );
};