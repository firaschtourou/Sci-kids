import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ClassesCard.module.css";

export const ClassesCard = () => {
  const [chapters, setChapters] = useState([]); // Correction : Utiliser `chapters` au lieu de `chapter`
  const [loading, setLoading] = useState(true);

  // Récupérer les chapitres depuis l'API
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get("https://backendversion0.onrender.com/api/chapters");
        setChapters(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des chapitres :", error);
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  // Fonction pour modifier un chapitre
  const handleEdit = async (id) => {
    const newName = prompt("Entrez le nouveau nom du chapitre :");
    if (newName) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/chapters/${id}`,
          { chapterName: newName }
        );
        setChapters((prevChapters) =>
          prevChapters.map((chapter) =>
            chapter._id === id
              ? { ...chapter, chapterName: response.data.chapter.chapterName }
              : chapter
          )
        );
      } catch (error) {
        console.error("Erreur lors de la modification du chapitre :", error);
      }
    }
  };

  // Fonction pour supprimer un chapitre
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce chapitre ?")) {
      try {
        await axios.delete(`http://localhost:5000/api/chapters/${id}`);
        setChapters((prevChapters) =>
          prevChapters.filter((chapter) => chapter._id !== id)
        );
      } catch (error) {
        console.error("Erreur lors de la suppression du chapitre :", error);
      }
    }
  };

  if (loading) {
    return <p>Chargement des chapitres...</p>;
  }

  return (
    <div className={styles.clubCard}>
      {chapters.map((chapter) => (
        <div key={chapter._id} className={styles.clubItem}>
          <span className={styles.clubName}>{chapter.chapterName}</span>
          <span className={styles.clubNamee}>Class: {chapter.className}</span>
          <div className={styles.actionButtons}>
            <button
              onClick={() => handleEdit(chapter._id)}
              className={styles.modifyButton}
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(chapter._id)}
              className={styles.deleteButton}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
      <div className={styles.divider} />
    </div>
  );
};