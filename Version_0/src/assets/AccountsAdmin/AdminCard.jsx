import React from 'react';
import styles from './Dashboard.module.css';

export const TeacherCard = ({ name, phone, isActive }) => {
  return (
    <>
      <div className={styles.teacherRow}>
        <div className={styles.teacherName}>{name}</div>
        <div className={styles.phoneNumber}>{phone}</div>
        <div className={styles.actionButtons}>
          <button className={styles.modifyButton}>Modify</button>
          <button className={styles.deleteButton}>Delete</button>
          <div className={isActive ? styles.activeStatus : styles.inactiveStatus}>
            {isActive ? 'Active' : 'Inactive'}
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </>
  );
};