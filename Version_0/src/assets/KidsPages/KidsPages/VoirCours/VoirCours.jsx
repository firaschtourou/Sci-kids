import React, { useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from './voircours.module.css'; // Importez le module CSS
import left from './gauche.png';
import rigth from './droite.png';
import DisplayPedagogicalContents from './DisplayPedagogicalContents';

export const Cours = () => {
  const pedagogicalContentRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const className = location.state?.className; // Récupérer le className depuis l'état de navigation
  console.log("Nom récupéré :", className);

  const handleNext = () => {
    if (pedagogicalContentRef.current) {
      pedagogicalContentRef.current.handleNext();
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <div className={styles.userProfile}>
            <div className={styles.profileWrapper}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt=""
                className={styles.profileBackground}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt="User avatar"
                className={styles.avatar}
              />
              <div className={styles.userInfo}>
                <span className={styles.userName}>Sahar ketata</span>
                <span className={styles.userId}>159874</span>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt=""
                className={styles.menuBackground}
              />
              <span>Mes cours</span>
            </div>
            <div className={styles.logoutWrapper}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt="Logout icon"
                className={styles.logoutIcon}
              />
              <span
                tabIndex="0"
                role="button"
                className={styles.logoutText}
                onClick={() => handleNavigation('/')}
              >
                Log out
              </span>
            </div>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.courseContainer}>
            <div className={styles.courseContent}>
              <div className={styles.courseHeader}>
                <h1 className={styles.courseTitle}>{className}</h1>
                <h2 className={styles.courseSubtitle}>Cour 1 :</h2>
                <div className={styles.btn}>
                  <button className={styles.btn_left}>
                    <img src={left} alt="left" />
                  </button>
                  <button className={styles.btn_rigth} onClick={handleNext}>
                    <img src={rigth} alt="right" />
                  </button>
                </div>
                <div className={styles.courseCoverWrapper}>
                
                  {/* Contenu pédagogique positionné au centre de l'image */}
                  <div className={styles.pedagogicalContentOverlay}>
                    <DisplayPedagogicalContents ref={pedagogicalContentRef} className={className} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cours;