import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectField } from './components/SelectField';
import ChapiterBuilder from './ChapiterBuilder';
import styles from './Dashboard.module.css';

export const DashboardAjouterChapiter = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    try {
      navigate(path);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebar}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage} />
            <div className={styles.userName}>Root</div>
            <div className={styles.userEmail}>Scikids@gmail.com</div>
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
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/QuizAdmin')}
            >
              Quiz
            </button>
             <div className={styles.logoutWrapper1}>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon1} />
                          <span tabIndex="0" role="button" className={styles.logoutText1} onClick={() => handleNavigation('/')}>Log out</span>
                        </div>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Admin 👋🏼</h1>
            <div className={styles.searchBox}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a2d5994f3e7591026d17b75e05a400996b2106b14f2cd9dad3595ff535358b?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
                alt="Magnifying glass icon for search"
                className={styles.searchIcon}
              />
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </header>

          <form className={styles.formContainer}>
            
          
            <div className={styles.formField}>
            
            
            <ChapiterBuilder />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
