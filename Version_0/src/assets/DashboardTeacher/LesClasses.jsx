import React from 'react';
import { useNavigate } from "react-router-dom";

import styles from './Classes.module.css';
import ClassCard from './ClassCard';
import image from './Group 237658.png';

function Classes() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
      };

    return (
        <div className={styles.container}>
            <div className={styles.sidebarContent}>
                <div className={styles.sidebar}>
                    <div className={styles.profileSection}>
                        <div className={styles.profileImage}  >
                            <img src={image} alt="Profile" />
                        </div>
                        <div className={styles.userName}>Samantha</div>
                        <div className={styles.userEmail}>samantha@email.com</div>
                    </div>
                    <nav className={styles.navigation}>
                        <button className={styles.navButton}>Classes</button>
                        <div className={styles.logoutWrapper2}>
                                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon2} />
                                      <span tabIndex="0" role="button" className={styles.logoutText2}  onClick={() => handleNavigation('/')}>Log out</span>
                                    </div>
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
                            <input
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                    </div>
                    <h1 className={styles.title}>Les Classes</h1>
                    <div className={styles.cardsContainer}>
                        <div className={styles.cardsGrid}>
                           
                                <div  className={styles.column}>
                                    <ClassCard  />
                                </div>
                           
                        </div>
                    </div>
                    <div className={styles.containerimg}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/265e205464e3b0ab1b88efd0236361e1b924f4753081341754595c2fd5a9aa91?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                            className={styles.footerImage}
                            alt="Decorative footer illustration"
                        />
                    </div>

                </main>
            </div>
        </div>
    );
}

export default Classes;