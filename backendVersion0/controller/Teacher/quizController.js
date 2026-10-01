const Quiz = require('../../models/Teacher/QuizTeacher');

// Créer un nouveau quiz
const createQuiz = async (req, res) => {
  try {
    const { className, hidden, ChapterName, QuizName, Questions } = req.body;

    const quiz = new Quiz({ className, hidden, ChapterName, QuizName, Questions });
    await quiz.save();

    res.status(201).json({ message: 'Quiz created successfully', quiz });
  } catch (error) {
    res.status(500).json({ message: 'Error creating quiz', error });
  }
};
// Basculer l'état hidden d'un quiz
const toggleHidden = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz non trouvé." });
    }

    // Inverser la valeur de hidden
    quiz.hidden = !quiz.hidden;
    await quiz.save();

    res.status(200).json({ message: "État hidden mis à jour avec succès.", quiz });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour de hidden.", error });
  }
};


// Récupérer tous les quiz
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving quizzes', error });
  }
};

// Récupérer un quiz par className
const getQuizByclassName = async (req, res) => {
  try {
    const { className } = req.params;

    if (!className) {
      return res.status(400).json({ message: 'Le className est requis.' });
    }

    const quizzes = await Quiz.find({ className: className });

    // Toujours renvoyer un tableau, même s'il est vide
    res.status(200).json(quizzes || []);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des quiz', error });
  }
};


exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, userAnswers } = req.body;

    // Récupérer le quiz depuis la base de données
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let correctAnswers = 0;

    // Parcourir chaque question du quiz
    quiz.Questions.forEach((question) => {
      const userAnswer = userAnswers[question._id]; // Réponses de l'utilisateur pour cette question
      const correctOptions = question.Answers
        .filter(answer => answer.isCorrect) // Filtrer les réponses correctes
        .map(answer => answer.text); // Extraire le texte des réponses correctes

      // Vérifier si les réponses de l'utilisateur correspondent aux réponses correctes
      if (Array.isArray(userAnswer) && userAnswer.length === correctOptions.length && userAnswer.every(ans => correctOptions.includes(ans))) {
        correctAnswers++;
      }
    });

    // Renvoyer le résultat
    res.json({
      totalQuestions: quiz.Questions.length,
      correctAnswers: correctAnswers,
      message: correctAnswers === quiz.Questions.length ? 'Success! All answers are correct.' : 'There are some errors in your answers.'
    });
  } catch (err) {
    console.error('Error in submitQuiz:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Supprimer un quiz par son ID
const deleteQuiz = async (req, res) => {
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
// Mettre à jour un quiz par son ID
const updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { ChapterName, QuizName, Questions } = req.body;

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      id,
      { ChapterName, QuizName, Questions }, // Assurez-vous que ChapterName est inclus ici
      { new: true }
    );

    if (!updatedQuiz) {
      return res.status(404).json({ message: "Quiz non trouvé." });
    }

    res.status(200).json({ message: "Quiz mis à jour avec succès.", quiz: updatedQuiz });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du quiz.", error });
  }
};





module.exports = { createQuiz, getAllQuizzes, getQuizByclassName, deleteQuiz, updateQuiz, toggleHidden  };
