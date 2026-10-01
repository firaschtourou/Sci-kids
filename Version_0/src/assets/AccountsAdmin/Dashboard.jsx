import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';  // Assuming this CSS file holds your styles.
import image from './Group 237658.png';


export const Dashboard = () => {
  const [teachers, setTeachers] = useState([]);  // Etat pour les enseignants
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [newName, setNewName] = useState("");
  const [teacherStats, setTeacherStats] = useState({ totalTeachers: 0, activeTeachers: 0 });

  useEffect(() => {
    // Fonction pour récupérer les enseignants
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("https://backendversion0.onrender.com/api/teachers");
        setTeachers(response.data);  // Met à jour l'état avec les enseignants récupérés
      } catch (error) {
        console.error("Erreur lors du chargement des enseignants : ", error);
      }
    };

    // Fonction pour récupérer les statistiques
    const fetchTeachersCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/teachers/count");
        setTeacherStats(response.data);  // Met à jour les statistiques
      } catch (error) {
        console.error("Erreur lors du chargement des statistiques : ", error);
      }
    };

    fetchTeachers();  // Appelle la fonction pour récupérer les enseignants
    fetchTeachersCount();  // Appelle la fonction pour récupérer les statistiques
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher._id !== id));  // Supprime l'enseignant de l'état
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setNewName(teacher.name);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/teachers/${editingTeacher._id}`, {
        name: newName,
      });
      setTeachers(teachers.map((t) => (t._id === editingTeacher._id ? { ...t, name: newName } : t)));  // Met à jour l'enseignant dans l'état
      setEditingTeacher(null);
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
    }
  };

  const toggleActiveState = async (id, currentState) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/teachers/${id}/toggleActive`, {
        active: !currentState,
      });
      setTeachers(teachers.map((t) => (t._id === id ? { ...t, active: response.data.active } : t)));
    } catch (error) {
      console.error("Erreur lors du changement d'état :", error);
    }
  };
  const navigate = useNavigate(); // Initialisation de useNavigate
  const handleAddTeacher = (e) => {
    e.preventDefault();
    navigate(`/AjouterAccount`);
  };
  const handleNavigation = (path) => {
    navigate(path); // Fonction pour naviguer vers un chemin donné
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebar}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <img src={image} alt="Profile" />
            </div>
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
          <section className={styles.statsSection}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc59ec3a6b4b5f238e2d44da0adae095fe57a3bd9abf181ecd754aab4aad113f?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              growth="16%"
              className={styles.image1}
            />
            <div className={styles.statCard}>
              <h3>Total Teachers</h3>
              <p>{teacherStats.totalTeachers}</p>
            </div>

            <div className={styles.statDivider} />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d0c9aa24e9a8047696c9440a27509fb6a0853fec5f83a2c9397cd2e08c42263?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              className={styles.image1} />
            <div className={styles.statCard}>
              <h3>Active Now</h3>
              <p>{teacherStats.activeTeachers}</p>
            </div>
          </section>
          <section className={styles.teachersSection}>
            <div className={styles.teachersHeader}>
              <h2 className={styles.teachersTitle}>All Teachers</h2>
              <button
                className={styles.addButton}
                aria-label="Add new classes"
                onClick={handleAddTeacher}
              >
                +
              </button>
            </div>
            <table className={styles.teachersTable}>
              <thead>
                <tr>
                  <th>Teacher Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher._id} className={styles.teacherRow}>
                    <td>
                      {editingTeacher && editingTeacher._id === teacher._id ? (
                        <input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          className={styles.editInput}
                        />
                      ) : (
                        teacher.name
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => toggleActiveState(teacher._id, teacher.active)}
                        className={`${styles.statusButton} ${teacher.active ? styles.active : styles.inactive
                          }`}
                      >
                        {teacher.active ? "Actif" : "Inactif"}
                      </button>
                    </td>
                    <td>
                      <div className={styles.actionButtons}>
                        {editingTeacher && editingTeacher._id === teacher._id ? (
                          <button
                            className={styles.editButton}
                            onClick={handleSave}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className={styles.editButton}
                            onClick={() => handleEdit(teacher)}
                          >
                            Edit
                          </button>
                        )}
                        <button
                          className={styles.deleteButton}
                          onClick={() => handleDelete(teacher._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

