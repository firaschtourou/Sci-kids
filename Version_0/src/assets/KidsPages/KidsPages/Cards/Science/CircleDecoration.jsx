import React from 'react';
import  './science.css';

const CircleDecoration = ({ size }) => {
  return (
    <div 
      className="circleDecor" 
      style={{ width: size.width, height: size.height }}
      role="presentation"
    />
  );
};

export default CircleDecoration;