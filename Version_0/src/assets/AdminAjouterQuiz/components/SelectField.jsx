import React from 'react';
import styles from '../Dashboard.module.css';

export const SelectField = ({ label, required }) => {
  return (
    <>
      <label className={styles.fieldLabel}>
        {label}
        {required && <span className={styles.requiredMark}>*</span>}
      </label>
      <div className={styles.selectContainer}>
        <select className={styles.selectField} aria-label={label}>
          <option value="">Seleccionar</option>
        </select>
      </div>
    </>
  );
};