const express = require("express");
const { addOrUpdateKid } = require("../controller/Teacher/AjoutKidsController");

const router = express.Router();

router.put("/addKid", addOrUpdateKid); // Route pour ajouter/met à jour un enfant
module.exports = router;
