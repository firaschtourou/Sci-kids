const express = require("express");
const router = express.Router();
const authController = require("../controller/Authentification/authenadminController");

// Route pour la connexion
router.post("/", authController.authenticateUser);

module.exports = router;
