import React from 'react';
import styles from './Dashboard.module.css';

export const StatCard = ({ icon, title, value, growth }) => {
  return (
    <div className={styles.statContainer}>
      <img loading="lazy" src={icon} className={styles.statIcon} alt="" />
      <div className={styles.statContent}>
        <div className={styles.statTitle}>{title}</div>
        <div className={styles.statValue}>{value}</div>
       
      </div>
    </div>
  );
};