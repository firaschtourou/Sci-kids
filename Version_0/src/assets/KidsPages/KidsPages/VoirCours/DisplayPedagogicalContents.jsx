import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './display.module.css'; // Importez le module CSS

const DisplayPedagogicalContents = ({ className }) => {
  const [contents, setContents] = useState([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index actuel

  useEffect(() => {
    if (className) {
      // Inclure le className dans l'URL
      axios.get(`https://backendversion0.onrender.com/api/pedagogical-content/${className}`)
        .then(response => {
          setContents(response.data.contents);
          setError(null);
        })
        .catch(error => {
          console.error('Error fetching chapter:', error);
          setError("Erreur lors de la récupération des quiz. Veuillez réessayer.");
        });
    } else {
      setError("Aucun className n'a été fourni.");
    }
  }, [className]);

  // Fonction pour afficher le contenu suivant
  const handleNext = () => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Revenir au début si on atteint la fin
    }
  };

  return (
    <div className={styles.pedagogicalContent}>
      <h2>Chapters List</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : contents.length > 0 ? (
        <div key={contents[currentIndex]._id} className={styles.contentItem}>
          <h3>{contents[currentIndex].chapterName}</h3>
          {contents[currentIndex].contents.map((item, index) => (
            <div key={index}>
              {item.video && (
                <video controls width="500" className={styles.video}>
                  <source
                    src={`https://backendversion0.onrender.com/api/pedagogical-content/video/${contents[currentIndex]._id}`}
                    type={item.video.contentType}
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              )}
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun Chapter à afficher.</p>
      )}
      {/* Bouton pour passer au contenu suivant */}
      <button onClick={handleNext} className={styles.nextButton}>
        Suivant
      </button>
    </div>
  );
};

export default DisplayPedagogicalContents;