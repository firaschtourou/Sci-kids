// controllers/ListKidsController.js
const Kid = require('../../models/Teacher/AjoutKids'); // Assurez-vous que le chemin est correct

const getKidsByClassName = async (req, res) => {
    try {
        const className = decodeURIComponent(req.params.className); // Décoder le nom de la classe
        const kids = await Kid.find({ className }).select('name matricule -_id'); // Récupérer les enfants par className
        if (!kids || kids.length === 0) {
            return res.status(404).json({ success: false, message: 'Aucun enfant trouvé pour cette classe' });
        }

        res.status(200).json({ success: true, kids }); // Retourner les enfants
    } catch (error) {
        console.error('Erreur lors de la récupération des enfants:', error);
        res.status(500).json({ success: false, message: 'Erreur serveur' });
    }
};

const deleteKids = async (req, res) => {
    try {
        const { matricule } = req.params;

        if (!matricule) {
            return res.status(400).json({ error: "Matricule non fourni." });
        }

        const deletedKid = await Kid.findOneAndDelete({ matricule });
        if (!deletedKid) {
            return res.status(404).json({ error: "Enfant non trouvé." });
        }

        res.status(200).json({ message: "Enfant supprimé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'enfant:", error);
        res.status(500).json({ error: "Erreur lors de la suppression de l'enfant." });
    }
};
module.exports = { getKidsByClassName, deleteKids  };