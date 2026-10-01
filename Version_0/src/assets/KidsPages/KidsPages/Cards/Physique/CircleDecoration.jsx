import React from 'react';
import  './phy.css';

const CircleDecoration = ({ size }) => {
  return (
    <div 
      className="circleDecorPhy" 
      style={{ width: size.width, height: size.height }}
      role="presentation1"
    />
  );
};

export default CircleDecoration;