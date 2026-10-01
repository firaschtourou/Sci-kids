// routes/kidRoutes.js
const express = require('express');
const router = express.Router();
const { getClassesByName } = require('../controller/Kids/GetClassKidController');

// Route pour récupérer le className par le nom de l'enfant
router.get('/classes/:name', getClassesByName);

module.exports = router;