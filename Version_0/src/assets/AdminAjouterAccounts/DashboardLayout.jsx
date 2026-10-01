import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { SelectField } from './components/SelectField';
import styles from './styles/Dashboard.module.css';
import image1 from './Group 237658.png';

export const DashboardLayout = () => {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    email: "",
    matter: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backendversion0.onrender.com/api/users", formData);

      alert("Utilisateur ajouté avec succès !");
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur :", error.response?.data || error.message);

      // Afficher un message d'erreur utilisateur
      alert(error.response?.data?.message || "Une erreur est survenue. Veuillez réessayer.");
    }
  };
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Fonction pour naviguer vers un chemin donné
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
              onClick={() => handleNavigation('/ChaptersAdmin')}>Chapters</button>
            <button className={styles.navButton}
              onClick={() => handleNavigation('/ClassesAdmin')}
            >Classes</button>
            <button className={styles.navButton}
              onClick={() => handleNavigation('/QuizAdmin')}>Quiz</button>
            <div className={styles.logoutWrapper1}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon1} />
              <span tabIndex="0" role="button" className={styles.logoutText1} onClick={() => handleNavigation('/')}>Log out</span>
            </div>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Evano 👋🏼</h1>
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

          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Full Name :
                <span className={styles.requiredMark}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Skills :
              </label>
              <select
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className={styles.inputField}
                required
              >
                <option value="">-- Choose Skill --</option>
                <option value="Analytical Thinking">Analytical Thinking</option>
                <option value="Innovation">Innovation</option>
                <option value="Event Planning">Event Planning</option>
                <option value="Leadership">Leadership</option>
                <option value="Conflict Resolution">Conflict Resolution</option>
                <option value="Communication">Communication</option>
              </select>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Email :
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Matter :
              </label>
              <select
                name="matter"
                value={formData.matter}
                onChange={handleChange}
                className={styles.inputField}
                required
              >
                <option value="">- - Choose Matter - -</option>
                <option value="Educational Teacher">Educational Teacher</option>
                <option value="Club Manager">Club Manager</option>
                <option value="both">both</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Password :
              </label>
              <input
                type="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
            </div>


            <div className={styles.buttonGroup}>
              <button type="button" className={styles.actionButton} onClick={() => setFormData({ name: "", skills: "", sector: "", matter: "", password: "" })}>
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
