import React from 'react';
import styles from './consulter.module.css';  // Importation du CSS comme un module
import { CircleDecoration } from './CircleDecoration';

export const QuizCard = () => {
  return (
    <div className={styles.quizCard1}>
      <div className={styles.cardHeader1}>
        <CircleDecoration size="16px" className={styles.smallCircle1} />
        <CircleDecoration size="61px" className={styles.largeCircle1} />
      </div>
      <h2 className={styles.quizTitle1}>QUIZ</h2>
      <div className={styles.decorationContainer1}>
        <CircleDecoration size="38px" className={styles.mediumCircle1} />
      </div>
    </div>
  );
};