import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ajoutEnfant.module.css";
import image from "./Group 237658.png";

function Classes() {
    const [kidName, setKidName] = useState("");
    const [className, setClassName] = useState("");
    const [matricule, setMatricule] = useState("");
    const [options, setOptions] = useState([]); // État pour stocker les classes et les clubs

    // Récupérer les classes et les clubs depuis l'API
    useEffect(() => {
        const fetchClassesAndClubs = async () => {
            try {
                const response = await axios.get("https://backendversion0.onrender.com/api/classandclub");
                setOptions(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des classes et clubs:", error);
            }
        };

        fetchClassesAndClubs();
    }, []);

    // Générer un matricule aléatoire
    const generateMatricule = () => {
        const digits = "0123456789";
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let matricule = "";

        for (let i = 0; i < 4; i++) {
            matricule += digits[Math.floor(Math.random() * digits.length)];
            matricule += letters[Math.floor(Math.random() * letters.length)];
        }

        return matricule;
    };

    // Soumettre le formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Valeurs des champs :", {
            kidName: kidName,
            matricule: matricule,
            className: className,
        });

        if (!kidName || !matricule || !className) {
            alert("Veuillez remplir tous les champs requis.");
            return;
        }

        try {
            const response = await axios.put(
                "https://backendversion0.onrender.com/api/users/addKid",
                {
                    name: kidName,
                    matricule: matricule,
                    className: className,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            alert(`Enfant ajouté avec succès!\n${JSON.stringify(response.data.data, null, 2)}`);
            setKidName("");
            setClassName("");
            setMatricule("");
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'enfant:", error);
            if (error.response) {
                console.error("Réponse du serveur :", error.response.data);
                console.error("Statut de la réponse :", error.response.status);
            }
            alert("Échec de l'ajout de l'enfant. Veuillez réessayer.");
        }
    };

    // Annuler et réinitialiser le formulaire
    const handleCancel = () => {
        setKidName("");
        setClassName("");
        setMatricule("");
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
                            <input
                                type="search"
                                placeholder="Rechercher"
                                aria-label="Search"
                            />
                        </div>
                    </div>
                    <h1 className={styles.title}>Ajouter un enfant</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="childName" className={styles.inputLabel}>
                                Nom de l'enfant <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="childName"
                                className={styles.textInput}
                                required
                                aria-required="true"
                                value={kidName}
                                onChange={(e) => setKidName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="className" className={styles.inputLabel}>
                                Classe ou Club <span className={styles.required}>*</span>
                            </label>
                            <select
                                className={styles.textInput}
                                id="className"
                                value={className}
                                onChange={(e) => setClassName(e.target.value)}
                                required
                                aria-required="true"
                            >
                                <option value="">Sélectionnez une classe ou un club</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option.type === 'class' ? option.className : option.clubName}>
                                        {option.type === 'class' ? option.className : option.clubName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="matricule" className={styles.inputLabel}>
                                Matricule <span className={styles.required}>*</span>
                            </label>
                            <input
                                id="matricule"
                                className={styles.selectInput}
                                required
                                aria-required="true"
                                value={matricule}
                                readOnly
                                onFocus={() => {
                                    if (!matricule) {
                                        setMatricule(generateMatricule());
                                    }
                                }}
                            />
                        </div>
                        <div className={styles.buttonGroup}>
                            <button
                                type="button"
                                className={styles.cancelButton}
                                onClick={handleCancel}
                            >
                                Annuler
                            </button>
                            <button type="submit" className={styles.submitButton}>
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Classes;