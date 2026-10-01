const express = require('express');
const { checkMatricule, verifyName } = require('../controller/Kids/KidsController');

const router = express.Router();

// Vérifier la matricule
router.post('/check-matricule', checkMatricule);

// Vérifier le nom
router.post('/verify-name', verifyName);

module.exports = router;