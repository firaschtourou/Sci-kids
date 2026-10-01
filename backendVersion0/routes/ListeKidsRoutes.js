// routes/classRoutes.js
const express = require('express');
const { getKidsByClassName, deleteKids  } = require("../controller/Teacher/ListKidsController");
const router = express.Router();

// Route pour récupérer les enfants d'une classe
router.get('/get-students/:className', getKidsByClassName);
router.delete("/delete-students/:matricule", deleteKids);

module.exports = router;