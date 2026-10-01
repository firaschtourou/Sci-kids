import React from 'react';
import  './math.css';

const CircleDecoration = ({ size }) => {
  return (
    <div 
      className="circleDecormath" 
      style={{ width: size.width, height: size.height }}
      role="presentation"
    />
  );
};

export default CircleDecoration;