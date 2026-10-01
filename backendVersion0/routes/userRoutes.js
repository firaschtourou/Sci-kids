// routes/userRoutes.js
const express = require('express');
const { addUser } = require('../controller/Admin/userController'); // Assurez-vous que le chemin est correct
const router = express.Router();

// Route pour ajouter un utilisateur
router.post('/users', addUser);  // La fonction addUser doit être définie et importée ici

module.exports = router;
