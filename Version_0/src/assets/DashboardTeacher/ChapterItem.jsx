import { useState } from 'react';
import styles from './ChapterItem.module.css';
import IconHidden from './hidden.png';
import IconNotHidden from './NoHidden.png';

export const ChapterItem = ({ id, title, alt, onDelete, quiz, onSave }) => {
    const [isHidden, setIsHidden] = useState(quiz.hidden); // Initialiser avec la valeur de quiz.hidden
    const [isEditing, setIsEditing] = useState(false); // État pour gérer l'affichage du formulaire
    const [localQuiz, setLocalQuiz] = useState(quiz); // État pour gérer les modifications du quiz

    const toggleHidden = async () => {
        try {
            const response = await fetch(`https://backendversion0.onrender.com/api/quizzes/toggle-hidden/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json(); // Extraire les données de la réponse
                const updatedQuiz = data.quiz; // Accéder à l'objet quiz mis à jour
                console.log("Quiz mis à jour:", updatedQuiz); // Déboguer
                setIsHidden(updatedQuiz.hidden); // Mettre à jour l'état local
                console.log("Nouvelle valeur de isHidden:", updatedQuiz.hidden); // Déboguer
            } else {
                console.error('Échec de la mise à jour de hidden');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour de hidden:', error);
        }
    };

    const toggleIcon = async () => {
        await toggleHidden(); // Appeler la fonction pour basculer hidden
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce quiz ?");
        if (!confirmDelete) return; // Annuler la suppression si l'utilisateur clique sur "Non"

        try {
            const response = await fetch(`https://backendversion0.onrender.com/api/quizzes/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                onDelete(id); // Notifie le parent que le quiz a été supprimé
                alert("Quiz supprimé avec succès !");
            } else {
                console.error('Échec de la suppression du quiz');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression du quiz:', error);
        }
    };

    const handleEdit = () => {
        setIsEditing(true); // Afficher le formulaire de modification
    };

    const handleSave = async () => {
        const confirmSave = window.confirm("Êtes-vous sûr de vouloir enregistrer les modifications ?");
        if (!confirmSave) return; // Annuler l'enregistrement si l'utilisateur clique sur "Non"

        try {
            const response = await fetch(`https://backendversion0.onrender.com/api/quizzes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(localQuiz), // Envoyer les données mises à jour
            });

            if (response.ok) {
                onSave(localQuiz); // Notifie le parent que le quiz a été mis à jour
                setIsEditing(false); // Masquer le formulaire de modification
                alert('Quiz mis à jour avec succès !');
            } else {
                console.error('Échec de la mise à jour du quiz');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du quiz:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false); // Masquer le formulaire de modification sans sauvegarder
    };

    // Fonctions pour mettre à jour les champs du quiz
    const updateQuizName = (e) => {
        setLocalQuiz({ ...localQuiz, QuizName: e.target.value });
    };

    const updateQuestionText = (qIndex, text) => {
        const updatedQuestions = [...localQuiz.Questions];
        updatedQuestions[qIndex].Question = text;
        setLocalQuiz({ ...localQuiz, Questions: updatedQuestions });
    };

    const toggleAnswerType = (qIndex) => {
        const updatedQuestions = [...localQuiz.Questions];
        updatedQuestions[qIndex].AnswerType =
            updatedQuestions[qIndex].AnswerType === "radio" ? "checkbox" : "radio";
        setLocalQuiz({ ...localQuiz, Questions: updatedQuestions });
    };

    const updateOptionText = (qIndex, oIndex, text) => {
        const updatedQuestions = [...localQuiz.Questions];
        updatedQuestions[qIndex].Answers[oIndex].text = text;
        setLocalQuiz({ ...localQuiz, Questions: updatedQuestions });
    };

    const toggleCorrectOption = (qIndex, oIndex) => {
        const updatedQuestions = [...localQuiz.Questions];
        if (updatedQuestions[qIndex].AnswerType === "radio") {
            updatedQuestions[qIndex].Answers.forEach((answer) => {
                answer.isCorrect = false;
            });
        }
        updatedQuestions[qIndex].Answers[oIndex].isCorrect =
            !updatedQuestions[qIndex].Answers[oIndex].isCorrect;
        setLocalQuiz({ ...localQuiz, Questions: updatedQuestions });
    };

    const addQuestion = () => {
        const updatedQuestions = [
            ...localQuiz.Questions,
            { Question: "", AnswerType: "radio", Answers: [] },
        ];
        setLocalQuiz({ ...localQuiz, Questions: updatedQuestions });
    };

    const addOption = (qIndex) => {
        const updatedQuestions = [...localQuiz.Questions];
        updatedQuestions[qIndex].Answers.push({ text: "", isCorrect: false });
        setLocalQuiz({ ...localQuiz, Questions: updatedQuestions });
    };

    const removeQuestion = (qIndex) => {
        const updatedQuestions = [...localQuiz.Questions];
        updatedQuestions.splice(qIndex, 1);
        setLocalQuiz({ ...localQuiz, Questions: updatedQuestions });
    };

    return (
        <div className={styles.chapterContainer}>
        <img
            loading="lazy"
            src={isHidden ? IconNotHidden : IconHidden}
            className={styles.chapterIcon}
            alt={alt}
            onClick={toggleIcon} // Appeler toggleIcon lors du clic
            style={{ cursor: 'pointer' }}
        />
        <div className={styles.chapterTitle}>{title}</div>
        <button className={styles.addQuizButton} aria-label="Edit Quiz" onClick={handleEdit}>
            Modifier quiz
        </button> <br />
        <button className={styles.addQuizButton} aria-label="Delete Quiz" onClick={handleDelete}>
            Supprimer quiz
        </button>


            {isEditing && (
                <div style={{ padding: "20px", fontFamily: "Arial", marginTop: "20px" }}>
                    <div style={{ marginBottom: "20px" }}>
                        <label>
                            <strong>Quiz name *</strong>
                        </label>
                        <input
                            type="text"
                            value={localQuiz.QuizName}
                            onChange={updateQuizName}
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

                    {localQuiz.Questions.map((question, qIndex) => (
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
                        <button
                            onClick={handleCancel}
                            style={{
                                marginLeft: "10px",
                                padding: "10px 15px",
                                borderRadius: "4px",
                                border: "none",
                                background: "#dc3545",
                                color: "white",
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChapterItem;