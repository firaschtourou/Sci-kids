const express = require("express");
const router = express.Router();
const { getAllClasse, updateclasse, deleteClasse } = require("../controller/Admin/ClasseGetController");

// Route pour récupérer tous les classes
router.get("/", getAllClasse);

// Route pour modifier une classe
router.put("/:id", updateclasse);

// Route pour supprimer une classe
router.delete("/:id", deleteClasse);

module.exports = router;
