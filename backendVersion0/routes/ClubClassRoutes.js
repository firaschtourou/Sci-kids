const express = require('express');
const router = express.Router();
const { getClassesAndClubs, getChaptersByClassName } = require('../controller/Teacher/getclassandclubController'); // Assurez-vous que le chemin est correct

// Route pour récupérer les classes et les clubs
router.get('/classandclub', getClassesAndClubs);
router.get("/chapters", getChaptersByClassName);

module.exports = router;