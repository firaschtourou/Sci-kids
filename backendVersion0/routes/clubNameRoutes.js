const express = require("express");
const router = express.Router();
const { getAllClubs, updateClub, deleteClub } = require("../controller/Admin/ClubNameController");

// Route pour récupérer tous les clubs
router.get("/clubs", getAllClubs);

// Route pour modifier un club
router.put("/clubs/:id", updateClub);

// Route pour supprimer un club
router.delete("/clubs/:id", deleteClub);

module.exports = router;
