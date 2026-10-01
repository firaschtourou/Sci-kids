import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'; // Importer axios
import styles from './ListeDeClasse.module.css';
import image from './Group 237658.png';

function ListeClasses() {
    
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [matricule, setMatricule] = useState(null); // État pour stocker le matricule
    const [students, setStudents] = useState([]); // État pour stocker les étudiants
    const { className } = useParams();
    
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const encodedClassName = encodeURIComponent(className); // Encoder le nom de la classe
                const response = await axios.get(`https://backendversion0.onrender.com/api/classes/get-students/${encodedClassName}`);
                if (response.data.success) {
                    setStudents(response.data.kids); // Stocker les enfants
                } else {
                    console.error('Erreur lors de la récupération des enfants');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des enfants:', error);
            }
        };
        fetchStudents();
    }, [className]);

    const handleShare = async () => {
        try {
            const encodedClassName = encodeURIComponent(className);
            const response = await axios.get(`https://backendversion0.onrender.com/api/classes/get-matricule/${encodedClassName}`);
            if (response.data.success) {
                setMatricule(response.data.matricule);
                setShowAlert(true);
            } else {
                alert('Erreur lors de la récupération du matricule');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération du matricule:', error);
            alert('Erreur lors de la récupération du matricule');
        }
      };
    const handleDelete = async (matricule) => {
        console.log("Matricule de l'enfant à supprimer :", matricule);
        if (!matricule) {
            console.error("Matricule de l'enfant non défini.");
            return;
        }
    
        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet enfant ?");
        if (!confirmDelete) return;
    
        try {
            const response = await axios.delete(`https://backendversion0.onrender.com/api/classes/delete-students/${matricule}`);
            console.log("Réponse du serveur :", response.data);
            if (response.status === 200) {
                setStudents(students.filter(student => student.matricule !== matricule));
                alert("Enfant supprimé avec succès !");
            } else {
                console.error('Échec de la suppression de l\'enfant');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'enfant:', error);
        }
    };

    const handleAlertCancel = () => {
        setShowAlert(false);
        setMatricule(null); // Réinitialiser le matricule
    };
    const handleNavigation = (path) => {
        navigate(path);
      };

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
                     <div className={styles.logoutWrapper2}>
                                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon2} />
                                  <span tabIndex="0" role="button" className={styles.logoutText2}  onClick={() => handleNavigation('/')}>Log out</span>
                                </div>
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
                    <h1 className={styles.title}>{className}</h1>
                    <div className={styles.boutons}>
                        <button
                            className={styles.shareLink}
                            onClick={() => navigate("/ajouter-enfant")}
                            aria-label="Ajouter Enfant"
                        >
                            Ajouter Enfant
                        </button>
                        <button
  className={styles.shareLink}
  type="button"
  aria-label="Access Course"
  onClick={() => {
    console.log("className passé à la page Classes :", className); // Ajoutez ce log
    navigate("/cours", { state: { className } }); // Passer className via l'état
  }}
>
  Cours
</button>
                        <button
                            className={styles.shareLink}
                            onClick={handleShare}
                        >
                            Partager Lien
                        </button>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.tableContainer}> {/* Conteneur avec défilement */}
                            <table className={styles.studentTable}>
                                <thead className={styles.tableHeader}>
                                    <tr>
                                        <th className={styles.headerCell}>Nom Prénom</th>
                                        <th className={styles.headerCell}>Matricule</th>
                                        <th className={styles.headerCell}>Suppression</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.tableBody}>
                                    {students.map((student) => (
                                        <tr className={styles.studentRow} key={student.matricule}>
                                            <td className={styles.studentCell}>{student.name}</td>
                                            <td className={styles.studentCell}>{student.matricule}</td>
                                           
                                            <td className={styles.studentCell}>
                                                <button onClick={() => handleDelete(student.matricule)}>Supprimer</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {showAlert && (
                        <div style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "#fff",
                            padding: "50px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            zIndex: 1000,
                        }}>
                            <button
                                onClick={handleAlertCancel}
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    background: "transparent",
                                    border: "none",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    color: "#888",
                                }}
                            >
                                X
                            </button>
                            <h3>Matricule de la classe {className}</h3>
                            <p>{matricule}</p> {/* Afficher le matricule ici */}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default ListeClasses;