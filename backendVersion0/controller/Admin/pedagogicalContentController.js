const PedagogicalContent = require('../../models/Admin/pedagogicalContent');

// Récupérer tous les chapitres
exports.getAllChapters = async (req, res) => {
  try {
    const chapters = await PedagogicalContent.find({});
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter un nouveau chapitre
exports.addChapter = async (req, res) => {
  const { chapterName, ageLevel, contents } = req.body;
  try {
    const newChapter = new PedagogicalContent({ chapterName, ageLevel, contents });
    await newChapter.save();
    res.status(201).json(newChapter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modifier un chapitre existant
exports.updateChapter = async (req, res) => {
    const { id } = req.params; // ID du chapitre à modifier
    const { chapterName } = req.body; // Nouveau nom du chapitre
  
    // Vérifier si le nom du chapitre est fourni
    if (!chapterName) {
      return res.status(400).json({ error: "Le nom du chapitre est requis" });
    }
  
    try {
      // Mettre à jour le chapitre dans la base de données
      const updatedChapter = await PedagogicalContent.findByIdAndUpdate(
        id,
        { chapterName },
        { new: true } // Retourne le document mis à jour
      );
  
      // Vérifier si le chapitre existe
      if (!updatedChapter) {
        return res.status(404).json({ error: "Chapitre introuvable" });
      }
  
      // Répondre avec le chapitre mis à jour
      res.status(200).json({ message: "Chapitre modifié avec succès", chapter: updatedChapter });
    } catch (error) {
      // Gérer les erreurs
      res.status(500).json({ error: "Erreur lors de la modification du chapitre" });
    }
  };

// Supprimer un chapitre
exports.deleteChapter = async (req, res) => {
  const { id } = req.params;
  try {
    await PedagogicalContent.findByIdAndDelete(id);
    res.status(200).json({ message: 'Chapter deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};