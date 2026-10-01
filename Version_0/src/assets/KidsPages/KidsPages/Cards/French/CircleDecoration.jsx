import React from 'react';
import  './french.css';

const CircleDecoration = ({ size }) => {
  return (
    <div 
      className="circleDecor2" 
      style={{ width: size.width, height: size.height }}
      role="presentation2"
    />
  );
};

export default CircleDecoration;