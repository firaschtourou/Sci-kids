import React from 'react';
import styles from '../styles/Dashboard.module.css';

export const SidebarLink = ({ text, isActive }) => {
  return (
    <div className={`${styles.sidebarLink} ${isActive ? styles.active : ''}`}>
      {text}
    </div>
  );
};