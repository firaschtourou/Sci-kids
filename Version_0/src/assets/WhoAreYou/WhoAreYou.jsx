import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './ContentSection.module.css';
import Header from '../LandingPage/LandingPage/Header/Header'

const WhoAreYou = () => {
    const navigate = useNavigate();
  
    const handlejoinkids = () => {
        navigate("/loginkid");
      };
      const handlejoinTeacher = () => {
        navigate("/LoginTeacher");
      };
     
    return (
        <>
            <div className={styles.main}>
                <Header />
                <div className={styles.introduction}>Are you kid or teacher?</div>
                <div className={styles.selectionContainer}>
                    <div className={styles.selectionGroup}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77f3b996cd617e2cb629d4126936c80220d842da79b280d3a17e6dd266ba5be9?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                            alt="Teacher Icon"
                            className={styles.image1}
                        />
                        <button className={styles.selectionButton} onClick={handlejoinTeacher}>Teacher</button>
                    </div>
                    <div className={styles.selectionGroup}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58935dfb32558494cd237fa39be312f953ef4090224fcaaafc536b66920e039?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                            alt="Kid Icon"
                            className={styles.image}
                        />
                        <button className={styles.selectionButton} onClick={handlejoinkids}>Kid</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhoAreYou;