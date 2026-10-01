import React from 'react';
import styles from './consulter.module.css';

export const CircleDecoration = ({ size, className }) => {
  return (
    <div
      className={`${styles.circleDecoration1} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
};