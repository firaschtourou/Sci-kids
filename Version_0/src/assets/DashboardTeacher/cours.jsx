import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Utiliser useLocation pour accéder à l'état
import styles from './Cours.module.css';
import image from './Group 237658.png';
import { ChapterItem } from './ChapterItem';
import DisplayPedagogicalContents from './DisplayPedagogicalContents';

function Classes() {
  const [chapters, setChapters] = useState([]);
  const location = useLocation(); // Utiliser useLocation pour accéder à l'état
  const navigate = useNavigate();
  const { className } = location.state || {}; // Récupérer className depuis l'état

  // Récupérer les quiz depuis le backend
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        if (!className) {
          console.error('className is undefined');
          return;
        }

        // Utiliser className directement sans l'encoder
        const response = await fetch(`https://backendversion0.onrender.com/api/quizzes/${className}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setChapters(data);
        } else {
          console.error('Expected an array but got:', data);
          setChapters([]);
        }
      } catch (error) {
        console.error('Failed to fetch quizzes:', error);
        setChapters([]);
      }
    };

    fetchQuizzes();
  }, [className]);

  // Fonction pour supprimer un quiz de la liste
  const handleDeleteQuiz = (id) => {
    setChapters((prevChapters) => prevChapters.filter((chapter) => chapter._id !== id));
  };

  // Fonction pour mettre à jour un quiz dans la liste
  const handleSaveQuiz = (updatedQuiz) => {
    setChapters((prevChapters) =>
      prevChapters.map((chapter) =>
        chapter._id === updatedQuiz._id ? updatedQuiz : chapter
      )
    );
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebar}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage}>
              <img src={image} alt="Profile" />
            </div>
            <div className={styles.userName}>Teacher</div>
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
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <div className={styles.main2}>
            <h1 className={styles.title}>Quiz & Courses</h1>
            <DisplayPedagogicalContents className={className}/>
            <button
              className={styles.addQuizButton}
              aria-label="Add Quiz"
              onClick={() => handleNavigation('/quiz')}>
              Ajouter Quiz
            </button>
            {Array.isArray(chapters) && chapters.map((chapter) => (
              <ChapterItem
                key={chapter._id}
                id={chapter._id}
                title={chapter.QuizName}
                alt={chapter.alt}
                quiz={chapter}
                onDelete={handleDeleteQuiz}
                onSave={handleSaveQuiz}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Classes;