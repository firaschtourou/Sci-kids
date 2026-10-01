const express = require("express");
const pedagogicalContentController = require("../controller/Admin/AjoutChapterController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Ajouter un contenu pédagogique avec des vidéos
router.post("/add", upload.array("videos"), pedagogicalContentController.addPedagogicalContent);

module.exports = router;