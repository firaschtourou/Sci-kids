const Kid = require('../../models/Teacher/AjoutKids');

const getClassesByName = async (req, res) => {
  try {
    const { name } = req.params;

    // Rechercher tous les documents correspondant au nom de l'enfant
    const kids = await Kid.find({ name });

    if (!kids || kids.length === 0) {
      return res.status(404).json({ success: false, message: 'Aucun enfant trouvé avec ce nom.' });
    }

    // Extraire les classes de tous les documents
    const classes = kids.map(kid => kid.className);

    // Retourner la liste des classes
    res.status(200).json({ success: true, classes });
  } catch (error) {
    console.error('Erreur lors de la récupération des classes :', error);
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
};

module.exports = getClassesByName;