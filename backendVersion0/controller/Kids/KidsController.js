const Kids = require('../../models/Teacher/AjoutKids');

// Vérifier si une matricule existe dans la base de données
const checkMatricule = async (req, res) => {
  const { matricule } = req.body;

  if (!matricule) {
    return res.status(400).json({ message: 'Matricule est requis.' });
  }

  try {
    const kid = await Kids.findOne({ matricule });

    if (kid) {
      return res.status(200).json({ exists: true, message: 'Matricule existe dans la base de données.' });
    } else {
      return res.status(404).json({ exists: false, message: 'Matricule introuvable.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erreur serveur.', error: error.message });
  }
};

// Vérifier si le nom correspond à la matricule
const verifyName = async (req, res) => {
  const { matricule, name } = req.body;

  if (!matricule || !name) {
    return res.status(400).json({ message: 'Matricule et nom sont requis.' });
  }

  try {
    const kid = await Kids.findOne({ matricule });

    if (kid) {
      if (kid.name === name) {
        return res.status(200).json({ success: true, message: 'Le nom correspond à la matricule.' });
      } else {
        return res.status(400).json({ success: false, message: 'Le nom ne correspond pas à la matricule.' });
      }
    } else {
      return res.status(404).json({ success: false, message: 'Matricule introuvable.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erreur serveur.', error: error.message });
  }
};

module.exports = { checkMatricule, verifyName };