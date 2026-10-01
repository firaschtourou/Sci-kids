import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './quizcontent.module.css'; // Importation du fichier CSS en tant que module

export const QuizContent = ({ className }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Récupérer les quiz
  useEffect(() => {
    if (className) {
      axios.get(`http://localhost:5000/api/faire-quiz/${className}`)
        .then(response => {
          setQuizzes(response.data.quizzes);
          setError(null);
        })
        .catch(error => {
          console.error('Error fetching quizzes:', error);
          setError("Erreur lors de la récupération des quiz. Veuillez réessayer.");
        });
    } else {
      setError("Aucun className n'a été fourni.");
    }
  }, [className]);

  // Gérer les réponses de l'utilisateur
  const handleAnswerChange = (QuestionId, selectedOption, AnswerType) => {
    setUserAnswers((prevAnswers) => {
      if (AnswerType === 'radio') {
        return { ...prevAnswers, [QuestionId]: [selectedOption] };
      } else if (AnswerType === 'checkbox') {
        const currentAnswers = prevAnswers[QuestionId] || [];
        if (currentAnswers.includes(selectedOption)) {
          return { ...prevAnswers, [QuestionId]: currentAnswers.filter(ans => ans !== selectedOption) };
        } else {
          return { ...prevAnswers, [QuestionId]: [...currentAnswers, selectedOption] };
        }
      }
      return prevAnswers;
    });
  };

  // Soumettre le quiz
  const handleSubmit = () => {
    const isTeacherQuiz = selectedQuiz.hidden !== undefined; // Vérifie si le quiz est un QuizTeacher

    const submitUrl = isTeacherQuiz 
      ? 'http://localhost:5000/api/faire-quiz/teacher/submit' 
      : 'http://localhost:5000/api/faire-quiz/submit';

    axios.post(submitUrl, {
      quizId: selectedQuiz._id,
      userAnswers: userAnswers
    })
    .then(response => {
      setSubmitted(true);
      setResult(response.data);
      alert(response.data.message);
    })
    .catch(error => console.error('Error submitting quiz:', error));
  };

  return (
    <div className={style.quizContainer}>
      <h1>Quiz App</h1>
      {error && <p className={style.error}>{error}</p>}

      {!selectedQuiz ? (
        <div>
          <h2>Select a Quiz</h2>
          <ul className={style.quizList}>
            {quizzes.map(quiz => (
              <li key={quiz._id} onClick={() => setSelectedQuiz(quiz)}>
                {quiz.QuizName}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={style.quizForm}>
          <h2>{selectedQuiz.QuizName}</h2>
          {selectedQuiz.Questions.map((Question) => (
            <div key={Question._id} className={style.questionBlock}>
              <h3>{Question.Question}</h3>
              <div>
                {Question.Answers.map((Answer) => (
                  <label key={Answer._id} className={style.answerLabel}>
                    <input
                      type={Question.AnswerType}
                      name={`question-${Question._id}`}
                      value={Answer.text}
                      onChange={() => handleAnswerChange(Question._id, Answer.text, Question.AnswerType)}
                      checked={userAnswers[Question._id]?.includes(Answer.text)}
                    />
                    {Answer.text}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className={style.submitButton} onClick={handleSubmit}>
            Submit Quiz
          </button>
        </div>
      )}

      {submitted && result && (
        <div className={style.resultContainer}>
          <h2>Result:</h2>
          <p>Total Questions: {result.totalQuestions}</p>
          <p>Correct Answers: {result.correctAnswers}</p>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
};