import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import style from './savename.module.css'; // Importation du fichier CSS en tant que module
import Kid from './Kid.png';
import School from './School.png';
import icon from './icon.png';

const SaveNamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");

  // Récupérer le matricule depuis l'état de navigation
  const matricule = location.state?.matricule;

  const handleVerify = async () => {
    if (!name.trim()) {
      alert("Veuillez entrer un nom valide.");
      return;
    }

    try {
      const response = await axios.post("https://backendversion0.onrender.com/api/verify-name", { matricule, name });

      if (response.data.success) {
        // Si le nom correspond, naviguer vers le tableau de bord
        navigate("/dashboard", { state: { matricule, name } });
        alert('Nom vérifié avec succès. Bienvenue sur notre plateforme !');
      } else {
        alert('Le nom ne correspond pas à la matricule.');
      }
    } catch (error) {
      alert(
        error.response
          ? error.response.data.message
          : 'Erreur de connexion au serveur. Veuillez réessayer.'
      );
    }
  };

  return (
    <div className={style.loginPage}>
      <div className={style.background}>
        <img src={School} alt="School" className={style.schoolImage} />
        <img src={Kid} alt="Character" className={style.characterImage} />
      </div>
      <div className={style.loginCard}>
        <div className={style.iconBg}>
          <img src={icon} alt="Character" className={style.icon} />
        </div>
        <label htmlFor="name" className={style.nameLabel}>Your Name:</label>
        <input
          type="text"
          id="name"
          className={style.matriculeInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={style.loginButton} onClick={handleVerify}>Vérifier</button>
      </div>
    </div>
  );
};

export default SaveNamePage;