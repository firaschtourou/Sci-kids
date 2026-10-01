import React from "react";
import { useLocation } from "react-router-dom"; // Importez useLocation
import QuizBuilder from "./QuizBuilder";
import styles from "./Quiz.module.css";
import image from './Group 237658.png';

const Quiz = () => {
  const location = useLocation(); // Récupérez l'objet location
  const { className } = location.state || {}; // Récupérez className depuis le state

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebar}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <img src={image} alt="Profile" />
            </div>
            <div className={styles.userName}>Samantha</div>
            <div className={styles.userEmail}>samantha@email.com</div>
          </div>
          <nav className={styles.navigation}>
            <button className={styles.navButton}>Classes</button>
            
          </nav>
        </div>
        <main className={styles.mainContent}>
          <div className={styles.header}>
            <div className={styles.greeting}>Hello Teacher 👋🏼,</div>
            <div className={styles.searchBox}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5ef1e36abca11d6063e3a4ab39e22f1775dfce78d82af94045cafd90550086?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                className={styles.searchIcon}
                alt="Search icon"
              />
              <input type="search" placeholder="Search" aria-label="Search" />
            </div>
          </div>
          <h1 className={styles.title}>Ajouter un quiz</h1>

          {/* Transmettez className au composant QuizBuilder via les props */}
          <div className={styles.quizBuilderContainer}>
            <QuizBuilder className={className} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Quiz;