const express = require('express');
const {
  createQuiz,
  getAllQuizzes,
  updateQuiz,
  deleteQuiz,
} = require('../controller/Admin/quizController');

const router = express.Router();

// POST - Créer un quiz
router.post('/', createQuiz);

// GET - Récupérer tous les quiz
router.get('/', getAllQuizzes);

// PUT - Mettre à jour un quiz
router.put('/:id', updateQuiz);

// DELETE - Supprimer un quiz
router.delete('/:id', deleteQuiz);

module.exports = router;
