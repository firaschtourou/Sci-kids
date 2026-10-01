import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './ClassesCard.module.css';

export const ClassesCard = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("https://backendversion0.onrender.com/api/classe");
        setClasses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des classes :", error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const handleEdit = async (id) => {
    const newTeacherName = prompt("Entrez le nouveau nom du professeur :");
    if (newTeacherName) {
      try {
        const response = await axios.put(`http://localhost:5000/api/classe/${id}`, {
          teacherName: newTeacherName,
        });
        setClasses((prevClasses) =>
          prevClasses.map((classe) =>
            classe._id === id
              ? { ...classe, teacherName: response.data.classe.teacherName }
              : classe
          )
        );
      } catch (error) {
        console.error("Erreur lors de la modification de la classe :", error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette classe ?")) {
      try {
        await axios.delete(`http://localhost:5000/api/classe/${id}`);
        setClasses((prevClasses) => prevClasses.filter((classe) => classe._id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression de la classe :", error);
      }
    }
  };

  if (loading) {
    return <p>Chargement des noms de classes...</p>;
  }

  
    return (
      <div className={styles.classesContainer}>
        {classes.map((classe) => (
          <div key={classe._id} className={styles.classCard}>
            <span className={styles.className}>{classe.className}</span>
            <span className={styles.teacherName}>{classe.teacherName}</span>
            <div className={styles.actionButtons}>
              <button
                className={styles.modifyButton}
                onClick={() => handleEdit(classe._id)}
              >
                Modify
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(classe._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
    
};
