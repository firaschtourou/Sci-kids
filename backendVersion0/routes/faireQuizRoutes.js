const express = require('express');
const router = express.Router();
const faireQuizController = require('../controller/Kids/GetQuizController');

// Route pour récupérer les quiz par className
router.get('/:className', faireQuizController.getQuizzesByClassName);

// Route pour soumettre un quiz
router.post('/submit', faireQuizController.submitQuiz);

// Route pour soumettre un quiz teacher
router.post('/teacher/submit', faireQuizController.submitQuizTeacher);

module.exports = router;