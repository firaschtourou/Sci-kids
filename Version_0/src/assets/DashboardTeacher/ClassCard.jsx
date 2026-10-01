import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importer axios pour les requêtes API
import styles from "./ClassCard.module.css";

const ClassCard = () => {
    const [classes, setClasses] = useState([]);
    const [clubs, setClubs] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    

    useEffect(() => {
        const teacherName = localStorage.getItem("teacherName"); // Récupérer le nom de l'enseignant depuis le localStorage

        if (teacherName) {
            // Appeler l'API pour récupérer les classes
            axios
                .post("https://backendversion0.onrender.com/api/classes/get-classes", { teacherName })
                .then((response) => {
                    if (response.data.success) {
                        // Éviter les doublons en utilisant un Set
                        const uniqueClasses = [
                            ...new Map(
                                response.data.classes.map((item) => [item.className, item])
                            ).values(),
                        ];
                        setClasses(uniqueClasses);
                    } else {
                        setErrorMessage(response.data.message);
                    }
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des classes:", error);
                    setErrorMessage("Erreur lors de la récupération des classes");
                });

            // Appeler l'API pour récupérer les clubs
            axios
                .post("https://backendversion0.onrender.com/api/classes/get-clubs", { teacherName })
                .then((response) => {
                    if (response.data.success) {
                        setClubs(response.data.clubs);
                    } else {
                        setErrorMessage(response.data.message);
                    }
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des clubs:", error);
                    setErrorMessage("Erreur lors de la récupération des clubs");
                });
        }
    }, []);

    const handleCardClick = (className) => {
        navigate(`/class-details/${className}`, { state: { className } });
    };

   

    // Couleurs disponibles pour les cartes
    const cardColors = [styles.cardBlue, styles.cardPink, styles.cardGreen];

    return (
        <div className={styles.cardContainer}>
            {classes.length > 0 ? (
                classes.map((classItem, index) => (
                    <div
                        key={classItem.className}
                        className={`${styles.card} ${cardColors[index % cardColors.length]}`}
                        onClick={() => handleCardClick(classItem.className)}
                    >
                        <div className={styles.header}>
                            <div className={styles.title}>{classItem.className}</div>
                        </div>
                        <div className={styles.stats}>
                            <span>{classItem.matricule}</span>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/737dcb82c68edcda873124ed37537ccaf7985ce621dd79314363b0bdb7cea9a8?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                className={styles.divider}
                                alt=""
                            />
                        </div>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar} />
                        </div>
                    </div>
                ))
            ) : (
                <div>Aucune classe disponible.</div>
            )}

            {clubs.length > 0 ? (
                clubs.map((clubItem, index) => (
                    <div
                        key={clubItem.clubName}
                        className={`${styles.card} ${cardColors[index % cardColors.length]}`}
                        onClick={() => handleCardClick(clubItem.clubName)}
                    >
                        <div className={styles.header}>
                            <div className={styles.title}>{clubItem.clubName}</div>
                        </div>
                        <div className={styles.stats}>
                            <span>{clubItem.speciality}</span>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/737dcb82c68edcda873124ed37537ccaf7985ce621dd79314363b0bdb7cea9a8?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                className={styles.divider}
                                alt=""
                            />
                        </div>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar} />
                        </div>
                    </div>
                ))
            ) : (
                <div>Aucun club disponible.</div>
            )}
        </div>
    );
};

export default ClassCard;