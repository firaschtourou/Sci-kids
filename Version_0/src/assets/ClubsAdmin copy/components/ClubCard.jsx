import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ClubCard.module.css";

export const ClubCard = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer les noms des clubs depuis l'API
  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get("https://backendversion0.onrender.com/api/clubs");
        setClubs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des clubs :", error);
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  // Fonction pour modifier un club
  const handleEdit = async (id) => {
    const newName = prompt("Entrez le nouveau nom du club :");
    if (newName) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/clubs/${id}`,
          { clubName: newName }
        );
        setClubs((prevClubs) =>
          prevClubs.map((club) =>
            club._id === id
              ? { ...club, clubName: response.data.club.clubName }
              : club
          )
        );
      } catch (error) {
        console.error("Erreur lors de la modification du club :", error);
      }
    }
  };

  // Fonction pour supprimer un club
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce club ?")) {
      try {
        await axios.delete(`http://localhost:5000/api/clubs/${id}`);
        setClubs((prevClubs) => prevClubs.filter((club) => club._id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression du club :", error);
      }
    }
  };

  if (loading) {
    return <p>Chargement des noms de clubs...</p>;
  }

  return (
    <div className={styles.clubCard}>
      {clubs.map((club) => (
        <div key={club._id} className={styles.clubItem}>
          <span className={styles.clubName}>{club.clubName}</span>
          <button
            onClick={() => handleEdit(club._id)}
            className={styles.modifyButton}
          >
            Modifier
          </button>
          <button
            onClick={() => handleDelete(club._id)}
            className={styles.deleteButton}
          >
            Supprimer
          </button>
        </div>
      ))}
      <div className={styles.divider} />
    </div>
  );
};
