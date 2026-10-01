const Quiz = require('../../models/Teacher/Quiz');
const QuizTeacher = require('../../models/Teacher/QuizTeacher');

// Fonction pour récupérer les quiz par className
exports.getQuizzesByClassName = async (req, res) => {
  try {
    const { className } = req.params;

    if (!className) {
      return res.status(400).json({ success: false, message: "Le className est requis." });
    }

    // Récupérer les quiz du modèle Quiz (sans condition)
    const quizzes = await Quiz.find({ className: className });

    // Récupérer les quiz du modèle QuizTeacher où hidden est true
    const quizzesTeacher = await QuizTeacher.find({ className: className, hidden: true });

    // Combiner les résultats des deux modèles
    const allQuizzes = [...quizzes, ...quizzesTeacher];

    if (allQuizzes.length === 0) {
      return res.status(404).json({ success: false, message: "Aucun quiz trouvé pour ce className." });
    }

    res.status(200).json({ success: true, quizzes: allQuizzes });
  } catch (error) {
    console.error('Erreur lors de la récupération des quiz :', error);
    res.status(500).json({ success: false, message: "Erreur serveur lors de la récupération des quiz." });
  }
};

// Fonction pour soumettre un quiz
exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, userAnswers } = req.body;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let correctAnswers = 0;
    quiz.Questions.forEach((question) => {
      const correctOptions = question.Answers.filter((answer) => answer.isCorrect).map((answer) => answer.text);
      const userSelectedOptions = userAnswers[question._id] || [];

      if (question.AnswerType === 'radio') {
        if (correctOptions.includes(userSelectedOptions[0])) {
          correctAnswers++;
        }
      } else if (question.AnswerType === 'checkbox') {
        if (correctOptions.length === userSelectedOptions.length && correctOptions.every((option) => userSelectedOptions.includes(option))) {
          correctAnswers++;
        }
      }
    });

    const totalQuestions = quiz.Questions.length;
    const message = `You scored ${correctAnswers} out of ${totalQuestions}`;

    res.status(200).json({
      totalQuestions,
      correctAnswers,
      message,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting quiz', error });
  }
};

// Fonction pour soumettre un quiz teacher
exports.submitQuizTeacher = async (req, res) => {
  try {
    const { quizId, userAnswers } = req.body;
    const quiz = await QuizTeacher.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let correctAnswers = 0;
    quiz.Questions.forEach((question) => {
      const correctOptions = question.Answers.filter((answer) => answer.isCorrect).map((answer) => answer.text);
      const userSelectedOptions = userAnswers[question._id] || [];

      if (question.AnswerType === 'radio') {
        if (correctOptions.includes(userSelectedOptions[0])) {
          correctAnswers++;
        }
      } else if (question.AnswerType === 'checkbox') {
        if (correctOptions.length === userSelectedOptions.length && correctOptions.every((option) => userSelectedOptions.includes(option))) {
          correctAnswers++;
        }
      }
    });

    const totalQuestions = quiz.Questions.length;
    const message = `You scored ${correctAnswers} out of ${totalQuestions}`;

    res.status(200).json({
      totalQuestions,
      correctAnswers,
      message,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting quiz', error });
  }
};