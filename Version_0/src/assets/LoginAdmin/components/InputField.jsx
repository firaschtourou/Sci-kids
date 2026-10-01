import React from 'react';
import styles from './InputField.module.css';

export const InputField = ({ icon, label, type, value, onChange, id }) => {
  return (
    <div className={styles.inputWrapper}>
      <img loading="lazy" src={icon} alt="" className={styles.icon} />
      <div className={styles.inputContent}>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={styles.input}
          aria-label={label}
        />
      </div>
    </div>
  );
};