import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from './consulter.module.css';  // Importation du CSS comme un module
import { CourseCard } from './CourseCard';
import { QuizCard } from './QuizCard';
import { BlocklyCard } from './BlockleyCard';


export const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const className = location.state?.className; 
 const handleSave = (className) => {
    // Redirige vers la page Quiz
    navigate("/quizkid", { state: { className } });
  };

  const handleSave1 = (className) => {
    // Redirige vers la page voircours
    navigate("/voircours", { state: { className } });
  };
  const handleSave2 = (className) => {
    // Redirige vers la page voircours
    navigate("/blockly", { state: { className } });
  };

  return (
    <div className={styles.dashboard1}>
      <div className={styles.content1}>
        <aside className={styles.sidebar1}>
          <div className={styles.userProfile1}>
            <div className={styles.profileWrapper1}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className={styles.profileBackground1} />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="User avatar" className={styles.avatar1} />
              <div className={styles.userInfo1}>
                <span className={styles.userName1}>Sahar ketata</span>
                <span className={styles.userId1}>159874</span>
              </div>
            </div>
            <div className={styles.menuItem1}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className={styles.menuBackground1} />
              <span>Mes cours</span>
            </div>
            <div className={styles.logoutWrapper1}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon1} />
              <span tabIndex="0" role="button" className={styles.logoutText1}>Log out</span>
            </div>
          </div>
        </aside>

        <main className={styles.mainContent1}>
          <div className={styles.contentWrapper1}>
            <h1 className={styles.chapterTitle1}>Chapter 1 -Science</h1>
            <div className={styles.cardContainer1}>
              <button onClick={() => handleSave1(className)} className={styles.btn1}><CourseCard title="Chapters" /></button>
              <button className={styles.btn1} onClick={() => handleSave(className)}><QuizCard title="Quiz" /></button>
              <button className={styles.btn1} onClick={() => handleSave2(className)}><BlocklyCard title="Blockly" /></button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;