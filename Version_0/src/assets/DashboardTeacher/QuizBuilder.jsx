import React, { useState, useEffect } from "react";
import axios from "axios";

const QuizBuilder = ({ className }) => {
  const [quiz, setQuiz] = useState({
    className: "",
    hidden: false,
    ChapterName: "",
    QuizName: "",
    Questions: [],
  });

  const [options, setOptions] = useState([]); // État pour stocker les classes et clubs
  const [chapters, setChapters] = useState([]); // État pour stocker les chapitres

  // Récupérer les classes et les clubs depuis l'API
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get("https://backendversion0.onrender.com/api/classandclub");
        setOptions(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des options:", error);
      }
    };

    fetchOptions();
  }, []);

  // Récupérer les chapitres en fonction de la className sélectionnée
  const fetchChapters = async (selectedClassName) => {
    try {
      const response = await axios.get("https://backendversion0.onrender.com/api/chapters", {
        params: { className: selectedClassName },
      });
      setChapters(response.data); // Mettre à jour l'état des chapitres
    } catch (error) {
      console.error("Erreur lors de la récupération des chapitres:", error);
    }
  };

  // Mettre à jour le quiz avec le className sélectionné et récupérer les chapitres
  const handleSelectChange = async (e) => {
    const selectedClassName = e.target.value;
    setQuiz({ ...quiz, className: selectedClassName });

    // Récupérer les chapitres pour la className sélectionnée
    if (selectedClassName) {
      await fetchChapters(selectedClassName);
    } else {
      setChapters([]); // Réinitialiser les chapitres si aucune classe n'est sélectionnée
    }
  };

  // Ajouter une nouvelle question
  const addQuestion = () => {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      Questions: [
        ...prevQuiz.Questions,
        { Question: "", AnswerType: "radio", Answers: [] },
      ],
    }));
  };

  // Mettre à jour le texte d'une question
  const updateQuestionText = (index, text) => {
    setQuiz((prevQuiz) => {
      const updatedQuestions = [...prevQuiz.Questions];
      updatedQuestions[index].Question = text;
      return { ...prevQuiz, Questions: updatedQuestions };
    });
  };

  // Ajouter une option à une question
  const addOption = (index) => {
    setQuiz((prevQuiz) => {
      const updatedQuestions = [...prevQuiz.Questions];
      updatedQuestions[index].Answers.push({ text: "", isCorrect: false });
      return { ...prevQuiz, Questions: updatedQuestions };
    });
  };

  // Mettre à jour le texte d'une option
  const updateOptionText = (qIndex, oIndex, text) => {
    setQuiz((prevQuiz) => {
      const updatedQuestions = [...prevQuiz.Questions];
      updatedQuestions[qIndex].Answers[oIndex].text = text;
      return { ...prevQuiz, Questions: updatedQuestions };
    });
  };

  // Basculer une option comme correcte ou non
  const toggleCorrectOption = (qIndex, oIndex) => {
    setQuiz((prevQuiz) => {
      const updatedQuestions = [...prevQuiz.Questions];
      if (updatedQuestions[qIndex].AnswerType === "radio") {
        updatedQuestions[qIndex].Answers.forEach((option) => {
          option.isCorrect = false;
        });
      }
      updatedQuestions[qIndex].Answers[oIndex].isCorrect =
        !updatedQuestions[qIndex].Answers[oIndex].isCorrect;
      return { ...prevQuiz, Questions: updatedQuestions };
    });
  };

  // Basculer entre le type radio et checkbox
  const toggleAnswerType = (qIndex) => {
    setQuiz((prevQuiz) => {
      const updatedQuestions = [...prevQuiz.Questions];
      updatedQuestions[qIndex].AnswerType =
        updatedQuestions[qIndex].AnswerType === "radio" ? "checkbox" : "radio";
      return { ...prevQuiz, Questions: updatedQuestions };
    });
  };

  // Supprimer une question
  const removeQuestion = (index) => {
    setQuiz((prevQuiz) => {
      const updatedQuestions = [...prevQuiz.Questions];
      updatedQuestions.splice(index, 1);
      return { ...prevQuiz, Questions: updatedQuestions };
    });
  };

  // Enregistrer le quiz
  const handleSave = async () => {
    try {
      // Validation des données
      if (!quiz.className) {
        alert("Le nom de la classe ou du club est requis.");
        return;
      }

      if (quiz.Questions.length === 0) {
        alert("Ajoutez au moins une question.");
        return;
      }

      const isQuestionsValid = quiz.Questions.every(
        (q) => q.Question && q.AnswerType && q.Answers.length > 0
      );

      if (!isQuestionsValid) {
        alert("Veuillez remplir tous les champs des questions.");
        return;
      }

      const formattedQuiz = {
        className: quiz.className,
        hidden: quiz.hidden,
        ChapterName: quiz.ChapterName,
        QuizName: quiz.QuizName,
        Questions: quiz.Questions.map((q) => ({
          Question: q.Question,
          AnswerType: q.AnswerType,
          Answers: q.Answers,
        })),
      };

      const response = await axios.post(
        "https://backendversion0.onrender.com/api/quizzes",
        formattedQuiz,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Quiz enregistré:", response.data);
      alert("Quiz enregistré avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du quiz:", error);
      alert("Une erreur s'est produite lors de l'enregistrement du quiz.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Classe ou Club</strong>
        </label>
        <select
          value={quiz.className}
          onChange={handleSelectChange}
          style={{
            display: "block",
            width: "100%",
            padding: "8px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Sélectionnez une classe ou un club</option>
          {options.map((option, index) => (
            <option key={index} value={option.type === 'class' ? option.className : option.clubName}>
              {option.type === 'class' ? ` ${option.className}` : ` ${option.clubName}`}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Chapter name *</strong>
        </label>
        <select
          value={quiz.ChapterName}
          onChange={(e) => setQuiz({ ...quiz, ChapterName: e.target.value })}
          style={{
            display: "block",
            width: "100%",
            padding: "8px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Sélectionnez un chapitre</option>
          {chapters.map((chapter, index) => (
            <option key={index} value={chapter.chapterName}>
              {chapter.chapterName}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Quiz name *</strong>
        </label>
        <input
          type="text"
          value={quiz.QuizName}
          onChange={(e) => setQuiz({ ...quiz, QuizName: e.target.value })}
          placeholder="Nom du quiz"
          style={{
            display: "block",
            width: "100%",
            padding: "8px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {quiz.Questions.map((question, qIndex) => (
        <div
          key={qIndex}
          style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: "#f9f9f9",
          }}
        >
          <div>
            <input
              type="text"
              value={question.Question}
              onChange={(e) => updateQuestionText(qIndex, e.target.value)}
              placeholder={`Question ${qIndex + 1}`}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                margin: "10px 0",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <button
              onClick={() => toggleAnswerType(qIndex)}
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                background: question.AnswerType === "radio" ? "#007bff" : "#28a745",
                color: "white",
              }}
            >
              {question.AnswerType === "radio"
                ? "Switch to Checkbox"
                : "Switch to Radio"}
            </button>
          </div>
          {question.Answers.map((option, oIndex) => (
            <div
              key={oIndex}
              style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
            >
              <input
                type={question.AnswerType}
                checked={option.isCorrect}
                onChange={() => toggleCorrectOption(qIndex, oIndex)}
                style={{ marginRight: "10px" }}
              />
              <input
                type="text"
                value={option.text}
                onChange={(e) =>
                  updateOptionText(qIndex, oIndex, e.target.value)
                }
                placeholder="Option text"
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          ))}
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => addOption(qIndex)}>Add Option</button>
            <button
              onClick={() => removeQuestion(qIndex)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
              }}
            >
              Remove Question
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={addQuestion}
          style={{
            padding: "10px 15px",
            borderRadius: "4px",
            border: "none",
            background: "#28a745",
            color: "white",
          }}
        >
          Add Question
        </button>
        <button
          onClick={handleSave}
          style={{
            marginLeft: "10px",
            padding: "10px 15px",
            borderRadius: "4px",
            border: "none",
            background: "#007bff",
            color: "white",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default QuizBuilder;