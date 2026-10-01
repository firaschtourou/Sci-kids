import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { ClassesCard } from './components/ClassesCard';
import styles from './DashboardLayout.module.css';
import image1 from './Group 237658.png';

const Quiz = [
  { name: 'Robotics', classe: '2éme' },
  { name: 'Aviation', classe: '2éme' },
  { name: 'Software', classe: '5éme' },
  { name: 'VR/XR ', classe: '3éme' }
];

export const DashboardQuizAdmin = () => {
  const navigate = useNavigate();

  const handleAddTeacher = (e) => {
    e.preventDefault();
    navigate(`/AjouterQuiz`);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebar}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <img src={image1} alt="Profile" />
            </div>
            <div className={styles.userName}>Root</div>
            <div className={styles.userEmail}>SciKids@email.com</div>
          </div>
          <nav className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/AccountAdmin')}
            >
              Accounts
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/ClubsAdmin')}
            >
              Clubs
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/ChaptersAdmin')}
            >
              Chapters
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/ClassesAdmin')}
            >
              Classes
            </button>
            <button className={styles.navButton}>Quiz</button>
            <div className={styles.logoutWrapper1}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon1} />
              <span tabIndex="0" role="button" className={styles.logoutText1}  onClick={() => handleNavigation('/')}>Log out</span>
            </div>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Admin 👋🏼</h1>
            <SearchBar />
          </header>
          <section className={styles.clubsContainer}>
            <div className={styles.clubsHeader}>
              <h2 className={styles.clubsTitle}>All Quiz</h2>
              <button
                className={styles.addButton}
                aria-label="Add new Quiz"
                onClick={handleAddTeacher}
              >
                +
              </button>
            </div>
            <ClassesCard />
          </section>
        </main>
      </div>
    </div>
  );
};
