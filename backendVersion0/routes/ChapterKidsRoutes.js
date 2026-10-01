const express = require("express");
const router = express.Router();
const pedagogicalContentController = require("../controller/Kids/ChapterController");

// Récupérer le contenu pédagogique par className
router.get("/:className", pedagogicalContentController.getContentByClassName);

// Récupérer une vidéo par son ID
router.get("/video/:id", pedagogicalContentController.getVideoById);

module.exports = router;