// backend/routes/codeRoutes.js
const express = require('express');
const codeController = require('../controller/Kids/programController');

const router = express.Router();

// Sauvegarder le code
router.post('/save', codeController.saveCode);

// Récupérer tous les codes
router.get('/codes', codeController.getAllCodes);

module.exports = router;