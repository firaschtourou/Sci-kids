const User = require("../../models/Authentification/Admin");

// Fonction pour authentifier l'utilisateur
exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  // Vérification des champs
  if (!email || !password) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  try {
    // Recherche de l'utilisateur par email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    // Vérification du mot de passe
    if (user.password !== password) {
      return res.status(400).json({ message: "Mot de passe incorrect." });
    }

    // Réponse en cas de succès
    return res.status(200).json({
      success: true,
      message: "Connexion réussie.",
      redirectUrl: "/AccountAdmin",
    });
  } catch (err) {
    console.error("Erreur serveur :", err);
    res.status(500).json({ message: "Erreur interne du serveur." });
  }
};
