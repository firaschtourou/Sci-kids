// routes/clubRoutes.js
const express = require("express");
const { createClub } = require("../controller/Admin/ClubController");

const router = express.Router();

// Route pour créer un club
router.post("/", createClub);

module.exports = router;
