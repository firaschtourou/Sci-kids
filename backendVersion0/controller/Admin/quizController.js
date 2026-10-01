const Quiz = require('../../models/Teacher/Quiz');

exports.createQuiz = async (req, res) => {
  try {
    const { questions } = req.body;

    // Validation pour les types de réponse
    const formattedQuestions = questions.map((question) => {
      if (question.answerType === "checkbox" && !Array.isArray(question.correctAnswer)) {
        question.correctAnswer = [question.correctAnswer];
      }
      return question;
    });

    req.body.questions = formattedQuestions;

    const quiz = new Quiz(req.body);
    const savedQuiz = await quiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des quiz." });
  }
};

// Mettre à jour un quiz
exports.updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuiz = await Quiz.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedQuiz) {
      return res.status(404).json({ error: "Quiz non trouvé." });
    }
    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un quiz
exports.deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuiz = await Quiz.findByIdAndDelete(id);
    if (!deletedQuiz) {
      return res.status(404).json({ error: "Quiz non trouvé." });
    }
    res.status(200).json({ message: "Quiz supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du quiz." });
  }
};

