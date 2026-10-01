const Class = require('../../models/Teacher/Class'); // Modèle pour les classes
const Club = require('../../models/Admin/Club'); // Modèle pour les clubs

const getClassesAndClubs = async (req, res) => {
  try {
    // Récupérer les classes
    const classes = await Class.find({}, { className: 1, _id: 0 });
    // Récupérer les clubs
    const clubs = await Club.find({}, { clubName: 1, _id: 0 });

    // Combiner les résultats
    const options = [
      ...classes.map((cls) => ({ type: 'class', className: cls.className })), // Utiliser className
      ...clubs.map((club) => ({ type: 'club', clubName: club.clubName })), // Utiliser clubName
    ];

    res.status(200).json(options);
  } catch (error) {
    console.error('Erreur lors de la récupération des classes et clubs:', error);
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};
const PedagogicalContent = require("../../models/Admin/pedagogicalContent");

const getChaptersByClassName = async (req, res) => {
  try {
    const { className } = req.query;

    if (!className) {
      return res.status(400).json({ message: "className is required" });
    }

    const chapters = await PedagogicalContent.find({ className }, { chapterName: 1, _id: 0 });

    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getClassesAndClubs, getChaptersByClassName };