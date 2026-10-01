const Club = require('../../models/Admin/Club'); // Assurez-vous que c'est le bon modèle

exports.createClub = async (req, res) => {
  try {
    const { nomClub, specialite, nomTeacher } = req.body;

    // Vérification des données
    if (!nomClub || !specialite || !nomTeacher) {
      return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    // Création d'un nouveau club
    const newClub = new Club({
      clubName: nomClub,
      speciality: specialite,
      teacher: nomTeacher // Utiliser le nom de l'enseignant saisi directement
    });

    await newClub.save();

    res.status(201).json({ message: "Club créé avec succès", club: newClub });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la création du club", error: err.message });
  }
};
