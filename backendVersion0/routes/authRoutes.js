

const express = require("express");
const { authenticateUser } = require("../controller/Authentification/authController");
const router = express.Router();

// Route pour le login
router.post("/", authenticateUser);



module.exports = router;
