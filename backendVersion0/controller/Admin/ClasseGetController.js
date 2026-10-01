const Classe = require("../../models/Teacher/Class");

// Récupérer toutes les classes
const getAllClasse = async (req, res) => {
  try {
    const classes = await Classe.find({}, { className: 1, teacherName: 1 });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des classes" });
  }
};

// Modifier une classe
const updateclasse = async (req, res) => {
  try {
    const { id } = req.params;
    const { teacherName } = req.body;

    if (!teacherName) {
      return res.status(400).json({ error: "Le nom du professeur est requis" });
    }

    const updatedClasse = await Classe.findByIdAndUpdate(id, { teacherName }, { new: true });
    if (!updatedClasse) {
      return res.status(404).json({ error: "Classe introuvable" });
    }

    res.status(200).json({ message: "Classe modifiée avec succès", classe: updatedClasse });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la modification de la classe" });
  }
};

// Supprimer une classe
const deleteClasse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClasse = await Classe.findByIdAndDelete(id);

    if (!deletedClasse) {
      return res.status(404).json({ error: "Classe introuvable" });
    }

    res.status(200).json({ message: "Classe supprimée avec succès", classe: deletedClasse });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression de la classe" });
  }
};

module.exports = {
  getAllClasse,
  updateclasse,
  deleteClasse,
};
