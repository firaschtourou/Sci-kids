const express = require("express");
const router = express.Router();
const {
  getAllTeachers,
  deleteTeacher,
  updateTeacher,
  toggleActiveTeacher,
  getTeachersCount
} = require("../controller/Admin/GetTeacherController");

// Route pour obtenir tous les enseignants
router.get("/", getAllTeachers);

// Route pour obtenir le nombre d'enseignants
router.get("/count", getTeachersCount);

// Route pour supprimer un enseignant
router.delete("/:id", deleteTeacher);

// Route pour mettre à jour un enseignant
router.put("/:id", updateTeacher);

// Route pour modifier l'état actif d'un enseignant
router.put("/:id/toggleActive", toggleActiveTeacher);

module.exports = router;
