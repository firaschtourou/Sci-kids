const express = require('express');
const { createQuiz, getAllQuizzes, getQuizByclassName, deleteQuiz, updateQuiz, toggleHidden, getClassesAndClubs  } = require('..//controller/Teacher/quizController');

const router = express.Router();

// Créer un quiz
router.post('/quizzes', createQuiz);

// Récupérer tous les quiz
router.get('/quizzes', getAllQuizzes);

// Récupérer un quiz par ID
router.get('/quizzes/:className', getQuizByclassName);

router.delete('/quizzes/:id', deleteQuiz);

router.put('/quizzes/:id', updateQuiz); 

router.put("/quizzes/toggle-hidden/:id", toggleHidden);
module.exports = router;
