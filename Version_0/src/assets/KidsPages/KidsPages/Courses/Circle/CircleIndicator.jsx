import React from 'react';
import { Circle } from './Circle';
import  './test.css';

export function CircleIndicator() {
  return (
    <div className="container">
      <div className="indicatorWrapper">
        <div className="circleGroup">
          <Circle size="small" />
          <Circle size="medium" />
        </div>
        <div className="numberWrapper">
          <Circle size="large" />
          <div className="number">1</div>
        </div>
      </div>
    </div>
  );
}
export default CircleIndicator;