import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import styles from './dashbord.module.css';
import teacher from './Teacher.png';
import MathTopic from '../Cards/Math/MathTopic';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [classes, setClasses] = useState([]);

  // Récupérer les classes de l'enfant
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const name = location.state?.name; // Récupérer le nom de l'enfant depuis l'état de navigation
        console.log("Nom récupéré :", name);

        if (!name) {
          console.error("Le nom de l'enfant n'est pas défini dans l'état de navigation.");
          return;
        }

        const response = await axios.get(`https://backendversion0.onrender.com/api/kids/classes/${name}`);
        if (response.data.success) {
          setClasses(response.data.classes);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des classes :', error);
      }
    };

    fetchClasses();
  }, [location.state]);

  const handleSave = (className) => {
  navigate("/coursKids", { state: { className } }); // Transmettre le className
};

const handleNavigation = (path) => {
  navigate(path);
};

  return (
    <div className={styles.dashboard2}>
      <div className={styles.content2}>
        <aside className={styles.sidebar2}>
          <div className={styles.userProfile2}>
            <div className={styles.profileWrapper2}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className={styles.profileBackground2} />
              <div className={styles.div1}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="User avatar" className={styles.avatar2} />
                <div className={styles.userInfo2}>
                  <span className={styles.userName2}>Sahar ketata</span>
                  <span className={styles.userId2}>159874</span>
                </div>
              </div>
            </div>
            <div className={styles.menuItem2}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className={styles.menuBackground2} />
              <span>Mes cours</span>
            </div>
            <div className={styles.logoutWrapper2}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon2} />
              <span tabIndex="0" role="button" className={styles.logoutText2}  onClick={() => handleNavigation('/loginkid')}>Log out</span>
            </div>
          </div>
        </aside>

        <main className={styles.mainContent2}>
          <div className={styles.photo2}>
            <img src={teacher} alt='teacher' className={styles.front2} />
          </div>
          <div className={styles.courseSection2}>
            <h1 className={styles.course2}>Course</h1>
            <h2 className={styles.courseName2}>Course Name</h2>
            {classes.map((className, index) => (
              <div key={index}>
                <div className={styles.courseGrid2}>
                  <div className={styles.courseList2}>
                    <div className={styles.courseCards2}>
                      <button className={styles.btnmath} onClick={() => handleSave(className)}>
                        <MathTopic className={className} index={index} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;