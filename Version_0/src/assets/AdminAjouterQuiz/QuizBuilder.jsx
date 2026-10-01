import React, { useState } from "react";
import axios from "axios";

const QuizBuilder = () => {
  const [quiz, setQuiz] = useState({ name: "", questions: [] });

  // Ajouter une nouvelle question
  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        { text: "", type: "radio", options: [], correctOptions: [] },
      ],
    });
  };

  // Mettre à jour le texte d'une question
  const updateQuestionText = (index, text) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index].text = text;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // Ajouter une option à une question
  const addOption = (index) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index].options.push({ text: "", isCorrect: false });
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // Mettre à jour le texte d'une option
  const updateOptionText = (qIndex, oIndex, text) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[qIndex].options[oIndex].text = text;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // Basculer une option comme correcte ou non
  const toggleCorrectOption = (qIndex, oIndex) => {
    const updatedQuestions = [...quiz.questions];
    if (updatedQuestions[qIndex].type === "radio") {
      updatedQuestions[qIndex].options.forEach((option) => {
        option.isCorrect = false;
      });
    }
    updatedQuestions[qIndex].options[oIndex].isCorrect =
      !updatedQuestions[qIndex].options[oIndex].isCorrect;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // Basculer entre le type radio et checkbox
  const toggleAnswerType = (qIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[qIndex].type =
      updatedQuestions[qIndex].type === "radio" ? "checkbox" : "radio";
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // Supprimer une question
  const removeQuestion = (index) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions.splice(index, 1);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // Enregistrer le quiz
  const handleSave = async () => {
    try {
      const formattedQuiz = {
        QuizName: quiz.name,
        Questions: quiz.questions.map((q) => ({
          Question: q.text,
          AnswerType: q.type,
          Answers: q.options,
        })),
      };

      // API call to save the quiz
      const response = await axios.post("https://backendversion0.onrender.com/api/quizzes", formattedQuiz);
      console.log("Quiz saved:", response.data);
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
          <strong>Quiz name *</strong>
        </label>
        <input
          type="text"
          value={quiz.name}
          onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
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

      {quiz.questions.map((question, qIndex) => (
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
              value={question.text}
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
                background: question.type === "radio" ? "#007bff" : "#28a745",
                color: "white",
              }}
            >
              {question.type === "radio"
                ? "Switch to Checkbox"
                : "Switch to Radio"}
            </button>
          </div>
          {question.options.map((option, oIndex) => (
            <div
              key={oIndex}
              style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
            >
              <input
                type={question.type}
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
