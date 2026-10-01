import React from 'react';
import './sdgs.css';

export const GoalImage = ({ src, index }) => {
  return (
    <img
      loading="lazy"
      src={src}
      className="goalImage"
      alt={`Sustainable Development Goal ${index + 1}`}
    />
  );
};