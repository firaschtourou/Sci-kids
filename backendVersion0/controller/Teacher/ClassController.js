const Class = require('../../models/Teacher/Class');

// Récupérer les classes d'un professeur
const getClassesByTeacher = async (req, res) => {
  const { teacherName } = req.body;

  try {
    const classes = await Class.find({ teacherName });
    if (classes.length > 0) {
      res.status(200).json({ success: true, classes });
    } else {
      res.status(404).json({ success: false, message: 'Aucune classe trouvée pour cet enseignant' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur du serveur', error: error.message });
  }
};
const getMatriculeByClassName = async (req, res) => {
  try {
      const className = req.params.className;
      const classData = await Class.findOne({ className });

      if (!classData) {
          return res.status(404).json({ success: false, message: 'Classe non trouvée' });
      }

      res.status(200).json({ success: true, matricule: classData.matricule });
  } catch (error) {
      console.error('Erreur lors de la récupération du matricule:', error);
      res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
};


const Club = require('../../models/Admin/Club'); // Assurez-vous que le chemin est correct

// Récupérer les clubs d'un professeur
const getClubsByTeacher = async (req, res) => {
  const { teacherName } = req.body;

  try {
    const clubs = await Club.find({ teacher: teacherName });
    if (clubs.length > 0) {
      res.status(200).json({ success: true, clubs });
    } else {
      res.status(404).json({ success: false, message: 'Aucun club trouvé pour cet enseignant' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur du serveur', error: error.message });
  }
};

module.exports = { getClassesByTeacher, getMatriculeByClassName, getClubsByTeacher };


