import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SelectField } from './components/SelectField';
import styles from './styles/Dashboard.module.css';
import image1 from './Group 237658.png';

export const DashboardAjouterClub = () => {
  const [formData, setFormData] = useState({
    nomClub: '',
    specialite: '',
    nomTeacher: '' // Champ pour le nom de l'enseignant saisi manuellement
  });

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Gestion de la soumission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des données à envoyer
    console.log('Données envoyées:', formData);

    try {
      const response = await axios.post(
        'https://backendversion0.onrender.com/api/club',
        JSON.stringify(formData), // Convertir les données en JSON
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('Réponse du serveur :', response.data);
      alert('Club ajouté avec succès !');

      // Réinitialisation du formulaire
      setFormData({ nomClub: '', specialite: '', nomTeacher: '' });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du club:', error.response || error);
      const message = error.response?.data?.message || 'Une erreur inconnue est survenue.';
      alert(`Erreur : ${message}`);
    }
  };
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Fonction pour naviguer vers un chemin donné
  };
  const handleCancel = () => {
    setFormData({ nomClub: '', specialite: '', nomTeacher: '' });
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
            <div className={styles.userEmail}>SciKids@gmail.com</div>
          </div>
          <nav className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/AccountAdmin')}
            >
              Accounts
            </button>
            <button className={styles.navButton}
              onClick={() => handleNavigation('/ClubsAdmin')}
            >
              Clubs
            </button>
            <button className={styles.navButton}
              onClick={() => handleNavigation('/ChaptersAdmin')}>Chapters</button>            <button className={styles.navButton}
                onClick={() => handleNavigation('/ClassesAdmin')}
              >Classes</button>
            <button className={styles.navButton}
              onClick={() => handleNavigation('/QuizAdmin')}>Quiz</button>
            <div className={styles.logoutWrapper1}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon1} />
              <span tabIndex="0" role="button" className={styles.logoutText1}  onClick={() => handleNavigation('/')}>Log out</span>
            </div>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Admin 👋🏼</h1>
            <div className={styles.searchBox}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a2d5994f3e7591026d17b75e05a400996b2106b14f2cd9dad3595ff535358b?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
                alt=""
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

          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <div className={styles.selectContainer}>
                <label className={styles.fieldLabel}>Nom du Club:</label>

                <input
                  type="text"
                  name="nomClub"
                  value={formData.nomClub}
                  onChange={handleChange}
                  required
                  className={styles.selectField}
                />
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Spécialité:</label>
              <input
                type="text"
                name="specialite"
                value={formData.specialite}
                onChange={handleChange}
                required
                className={styles.selectField}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Nom de l'enseignant:</label>
              <input
                type="text"
                name="nomTeacher"
                value={formData.nomTeacher}
                onChange={handleChange}
                required
                className={styles.selectField}
              />
            </div>

            <div className={styles.buttonGroup}>
              <button type="button" className={styles.actionButton} onClick={handleCancel}>
                Annuler
              </button>
              <button type="submit" className={styles.actionButton}>
                Enregistrer
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
