// backend/routes/classRoutes.js
const express = require('express');
const router = express.Router();
const classController = require('../controller/Admin/classController');

// Route pour ajouter une classe
router.post('/', classController.createClass); // Notez que nous utilisons '/' ici, pas '/api/classes'

module.exports = router;
