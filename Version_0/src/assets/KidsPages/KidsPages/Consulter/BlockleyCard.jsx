import React from 'react';
import styles from './consulter.module.css';  // Importation du CSS comme un module
import { CircleDecoration } from './CircleDecoration';

export const BlocklyCard = ({ title }) => {
  return (
    <div className={styles.blocklyCard1}>
      <div className={styles.cardHeader1}>
        <CircleDecoration size="16px" className={styles.smallCircle1} />
        <CircleDecoration size="61px" className={styles.largeCircle1} />
      </div>
      <div className={styles.cardContent1}>
          <h2 className={styles.quizTitle1}>Blockly</h2>
        <CircleDecoration size="38px" className={styles.mediumCircle1} />
      </div>
    </div>
  );
};