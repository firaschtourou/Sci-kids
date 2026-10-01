import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { QuizContent } from './QuizContent.jsx';
import style from './dashboradquiz.module.css'; // Importation du fichier CSS en tant que module

export const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const className = location.state?.className; // Récupérer le className depuis l'état de navigation
  console.log("Nom récupéré :", className);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={style.dashboard}>
      <div className={style.content}>
        <aside className={style.sidebar}>
          <div className={style.userProfile}>
            <div className={style.profileWrapper}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt=""
                className={style.profileBackground}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt="User avatar"
                className={style.avatar}
              />
              <div className={style.userInfo}>
                <span className={style.userName}>Sahar ketata</span>
                <span className={style.userId}>159874</span>
              </div>
            </div>
            <div className={style.menuItem}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt=""
                className={style.menuBackground}
              />
              <span>Mes cours</span>
            </div>
            <div className={style.logoutWrapper}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt="Logout icon"
                className={style.logoutIcon}
              />
              <span
                tabIndex="0"
                role="button"
                className={style.logoutText}
                onClick={() => handleNavigation('/')}
              >
                Log out
              </span>
            </div>
          </div>
        </aside>

        <main className={style.mainContent}>
          <div className={style.quizWrapper}>
            <div className={style.quizHeader}>
              <h1 className={style.quizTitle}>Quiz</h1>
              <div className={style.quizContent}>
                <QuizContent className={className} />
              </div>
            </div>
            <div className={style.quizImageContainer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73675ca0c2e5026303b6fb1800fecc8ff4b3bb3678f9c92158c9e8d2d712420a?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt="Quiz illustration"
                className={style.quizImage}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;