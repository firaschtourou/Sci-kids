const express = require("express");
const pedagogicalContentController = require("../controller/Kids/GetContenuController");

const router = express.Router();

// Récupérer tous les contenus pédagogiques
router.get("/all", pedagogicalContentController.getAllPedagogicalContents);

// Récupérer une vidéo par son ID
router.get("/video/:id", pedagogicalContentController.getVideo);

module.exports = router;