import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './ClassesCard.module.css';

export const ClassesCard = ({ schoolName, classe }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [editQuiz, setEditQuiz] = useState(null); // Quiz à modifier
  const [isEditing, setIsEditing] = useState(false); // Contrôle du mode édition

  // Récupérer tous les quiz
  const fetchQuizzes = async () => {
    try {
      const response = await axios.get("https://backendversion0.onrender.com/quizzes");
      setQuizzes(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des quiz :", error);
    }
  };

  // Mettre à jour un quiz
  const updateQuiz = async (id, updatedData) => {
    try {
      await axios.put(`https://backendversion0.onrender.com/quizzes/${id}`, updatedData);
      alert("Quiz mis à jour avec succès !");
      setEditQuiz(null);
      setIsEditing(false);
      fetchQuizzes();
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  // Supprimer un quiz
  const deleteQuiz = async (id) => {
    try {
      await axios.delete(`https://backendversion0.onrender.com/quizzes/${id}`);
      alert("Quiz supprimé avec succès !");
      fetchQuizzes();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Gérer le clic sur "Modifier"
  const handleEdit = (quiz) => {
    // Vérifiez si `questions` existe, sinon initialisez-le avec un tableau vide
    const quizToEdit = {
      ...quiz,
      questions: quiz.questions || [],
    };
    setEditQuiz(quizToEdit);
    setIsEditing(true);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  // Ajouter une question vide pour modifier un quiz
  const addQuestion = () => {
    setEditQuiz({
      ...editQuiz,
      questions: [
        ...editQuiz.questions,
        {
          question: "",
          answerType: "radio",
          answers: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    });
  };

  return (
    <div className={styles.clubCard}>
      {quizzes.map((quiz) => (
        <div key={quiz._id} className={styles.quizItem}>
          <span className={styles.clubName}>{quiz.QuizName}</span>
          <div className={styles.actionButtons}>
            <button
              onClick={() => handleEdit(quiz)}
              className={styles.modifyButton}
            >
              Modifier
            </button>
            <button
              onClick={() => deleteQuiz(quiz._id)}
              className={styles.deleteButton}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}

      {isEditing && editQuiz && (
        <div className={styles.editForm}>
          <h2>Modifier le Quiz</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateQuiz(editQuiz._id, editQuiz);
            }}
          >
            <input
              type="text"
              value={editQuiz.chapterName}
              onChange={(e) =>
                setEditQuiz({ ...editQuiz, chapterName: e.target.value })
              }
              placeholder="Nom du chapitre"
              className={styles.inputField}
            />
            <input
              type="text"
              value={editQuiz.quizName}
              onChange={(e) =>
                setEditQuiz({ ...editQuiz, quizName: e.target.value })
              }
              placeholder="Nom du quiz"
              className={styles.inputField}
            />

            <h3>Questions</h3>
            {editQuiz.questions.map((question, index) => (
              <div key={index} className={styles.questionContainer}>
                <input
                  type="text"
                  value={question.question}
                  onChange={(e) => {
                    const updatedQuestions = [...editQuiz.questions];
                    updatedQuestions[index].question = e.target.value;
                    setEditQuiz({ ...editQuiz, questions: updatedQuestions });
                  }}
                  placeholder="Texte de la question"
                  className={styles.inputField}
                />
                <select
                  value={question.answerType}
                  onChange={(e) => {
                    const updatedQuestions = [...editQuiz.questions];
                    updatedQuestions[index].answerType = e.target.value;
                    setEditQuiz({ ...editQuiz, questions: updatedQuestions });
                  }}
                  className={styles.inputField}
                >
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                </select>
                {question.answers.map((answer, ansIndex) => (
                  <input
                    key={ansIndex}
                    type="text"
                    value={answer}
                    onChange={(e) => {
                      const updatedQuestions = [...editQuiz.questions];
                      updatedQuestions[index].answers[ansIndex] = e.target.value;
                      setEditQuiz({ ...editQuiz, questions: updatedQuestions });
                    }}
                    placeholder={`Réponse ${ansIndex + 1}`}
                    className={styles.inputField}
                  />
                ))}
                <input
                  type="text"
                  value={question.correctAnswer}
                  onChange={(e) => {
                    const updatedQuestions = [...editQuiz.questions];
                    updatedQuestions[index].correctAnswer = e.target.value;
                    setEditQuiz({ ...editQuiz, questions: updatedQuestions });
                  }}
                  placeholder="Réponse correcte"
                  className={styles.inputField}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className={styles.addButton}
            >
              Ajouter une question
            </button>

            <button type="submit" className={styles.saveButton}>
              Enregistrer
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className={styles.cancelButton}
            >
              Annuler
            </button>
          </form>
        </div>
      )}
    </div>
  );
};