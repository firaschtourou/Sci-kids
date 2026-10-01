const Class = require('../../models/Teacher/Class'); // Assurez-vous que le chemin est correct

exports.createClass = async (req, res) => {
  try {
    // Récupérer les données du body
    const { className, ageLevel, teacherName, matricule } = req.body;

    // Créer une nouvelle instance de la classe
    const newClass = new Class({
      className,
      ageLevel,
      teacherName,
      matricule
    });

    // Enregistrer la classe dans la base de données
    const savedClass = await newClass.save();

    // Répondre avec la classe enregistrée
    res.status(201).json({ class: savedClass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur lors de la création de la classe' });
  }
};

