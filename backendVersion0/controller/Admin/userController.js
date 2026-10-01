// controllers/userController.js
const User = require('../../models/Admin/AjoutTeacher'); // Assurez-vous que le chemin du modèle est correct


const addUser = async (req, res) => {
  try {
    const { name, email, skills, matter, password, } = req.body;

    const newUser = new User({
      name,
      email,
      skills,
      matter,
      password,
      roles: 'Teacher',
      active: 'false',
      matricule: Math.random().toString(36).substring(2, 10),

    });

    await newUser.save();
    res.status(201).json({ message: 'Utilisateur ajouté avec succès', user: newUser });
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur', error });
  }
};




module.exports = { addUser };
