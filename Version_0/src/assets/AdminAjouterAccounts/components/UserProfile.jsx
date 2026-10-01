import React from 'react';
import styles from '../styles/Dashboard.module.css';

export const UserProfile = ({ name, email }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImage} role="img" aria-label="Profile picture" />
      <div className={styles.profileName}>{name}</div>
      <div className={styles.profileEmail}>{email}</div>
    </div>
  );
};