import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
import Kid from './Kid.png';
import School from './School.png';

const LoginPage = () => {
  const [matricule, setMatricule] = useState('');
  const navigate = useNavigate();

  const handleCheck = async () => {
    if (!matricule.trim()) {
      alert('Veuillez entrer une matricule.');
      return;
    }

    try {
      const res = await axios.post('https://backendversion0.onrender.com/api/check-matricule', { matricule });

      if (res.data.exists) {
        // Passer le matricule à SaveNamePage via l'état de navigation
        navigate("/savename", { state: { matricule } });
      } else {
        alert('Matricule n\'existe pas.');
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
    <div className="login">
      <div className="background1">
        <img src={School} alt="School" className="school-image1" />
        <img src={Kid} alt="Character" className="character-image1" />
      </div>
      <div className="login-card1">
        <label htmlFor="matricule" className="matricule-label1">Matricule:</label>
        <input
          type="text"
          id="matricule"
          className="matricule-input1"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
        />
        <button className="login-button1" onClick={handleCheck}>LOGIN</button>
      </div>
    </div>
  );
};

export default LoginPage;