import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate
import axios from "axios"; // Import d'Axios pour les requêtes HTTP
import styles from "./LoginTeacher.module.css";

export const LoginTeacher = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs !");
      return;
    }
  
    try {
      const response = await axios.post(
        "https://backendversion0.onrender.com/api/login",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.data.success) {
        // Stocker les classes et le nom de l'enseignant dans le localStorage
        localStorage.setItem("classes", JSON.stringify(response.data.classes));
        localStorage.setItem("teacherName", response.data.teacherName); // Enregistrer le nom de l'enseignant
        navigate(response.data.redirectUrl);
      } else {
        setErrorMessage(response.data.message || "Identifiants incorrects.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setErrorMessage(
        error.response?.data?.message || "Une erreur est survenue. Réessayez."
      );
    }
  };
  


  return (
    <div className={styles.loginContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1de7c9a138aec5007ce5e5cb66301ca42321744f22d1420087ac6d750c8d173?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
            alt="Login illustration"
            className={styles.loginImage}
          />
        </div>
        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.headerWrapper}>
              <span className={styles.welcomeText}>Welcome back</span>
              <br />
              <span className={styles.loginTitle}>Login</span>
            </div>

            <InputField
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0882931717549c444893dfe6e16c96b10f5eb1f36987e1c4d592100c19ceab?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />

            <InputField
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5159f41915bf938647886fa057e7c04e90bcd5b2c6077ec588ca3dcb1d8182ce?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />

            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
            )}

            <div className={styles.rememberMeSection}>
              <div className={styles.rememberMeWrapper}>
                <input
                  type="checkbox"
                  id="remember"
                  className={styles.checkbox}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button type="button" className={styles.forgotPassword}>
                Forgot Password?
              </button>
            </div>

            <button type="submit" className={styles.loginButton}>
              Login
            </button>

            <div className={styles.registerPrompt}>
              Don't have an account?{" "}
              <span className={styles.registerLink}>Register</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
