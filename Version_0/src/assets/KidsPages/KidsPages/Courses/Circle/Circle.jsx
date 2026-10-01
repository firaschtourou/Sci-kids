import React from 'react';
import  './test.css';

export function Circle({ size }) {
  const sizeClasses = {
    small: "smallCircle",
    medium: "mediumCircle",
    large: "largeCircle"
  };

  return <div className={sizeClasses[size]} />;
}