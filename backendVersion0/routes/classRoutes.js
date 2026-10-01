const express = require('express');
const { getClassesByTeacher, getMatriculeByClassName, getClubsByTeacher } = require('../controller/Teacher/ClassController');

const router = express.Router();

// Route pour récupérer les classes par nom de professeur
router.post('/get-classes', getClassesByTeacher);

router.get('/get-matricule/:className', getMatriculeByClassName);

router.post('/get-clubs', getClubsByTeacher); 



module.exports = router;
