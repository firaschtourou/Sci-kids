import React from 'react';
import  './english.css';

const CircleDecoration = ({ size }) => {
  return (
    <div 
      className="circleDecor3" 
      style={{ width: size.width, height: size.height }}
      role="presentation3"
    />
  );
};

export default CircleDecoration;