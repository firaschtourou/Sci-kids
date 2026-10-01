const User = require("../../models/Admin/ClubName");

// Fonction pour récupérer tous les noms des clubs
const getAllClubs = async (req, res) => {
  try {
    const clubs = await User.find({}, { clubName: 1, _id: 1 });
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des clubs" });
  }
};

// Fonction pour modifier un club
const updateClub = async (req, res) => {
  try {
    const { id } = req.params; // ID du club à modifier
    const { clubName } = req.body; // Nouveau nom du club
    if (!clubName) {
      return res.status(400).json({ error: "Le nom du club est requis" });
    }
    const updatedClub = await User.findByIdAndUpdate(id, { clubName }, { new: true });
    if (!updatedClub) {
      return res.status(404).json({ error: "Club introuvable" });
    }
    res.status(200).json({ message: "Club modifié avec succès", club: updatedClub });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la modification du club" });
  }
};

// Fonction pour supprimer un club
const deleteClub = async (req, res) => {
  try {
    const { id } = req.params; // ID du club à supprimer
    const deletedClub = await User.findByIdAndDelete(id);
    if (!deletedClub) {
      return res.status(404).json({ error: "Club introuvable" });
    }
    res.status(200).json({ message: "Club supprimé avec succès", club: deletedClub });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du club" });
  }
};

module.exports = {
  getAllClubs,
  updateClub,
  deleteClub,
};
