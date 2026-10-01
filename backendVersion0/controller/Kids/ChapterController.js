const PedagogicalContent = require("../../models/Admin/pedagogicalContent");

// Récupérer le contenu pédagogique par className
exports.getContentByClassName = async (req, res) => {
  try {
    const { className } = req.params;

    // Rechercher le contenu pédagogique par className
    const content = await PedagogicalContent.find({ className });

    if (!content || content.length === 0) {
      return res.status(404).json({ message: "Aucun contenu trouvé pour cette classe." });
    }

    // Renvoyer les données au format JSON
    res.status(200).json({ contents: content });
  } catch (error) {
    console.error("Erreur lors de la récupération du contenu :", error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération du contenu." });
  }
};

// Récupérer une vidéo par son ID
exports.getVideoById = async (req, res) => {
  try {
    const { id } = req.params;

    // Rechercher le contenu pédagogique par ID
    const content = await PedagogicalContent.findById(id);

    if (!content) {
      return res.status(404).json({ message: "Contenu non trouvé." });
    }

    // Vérifier si le contenu contient une vidéo
    const video = content.contents.find((item) => item.video);
    if (!video) {
      return res.status(404).json({ message: "Aucune vidéo trouvée pour ce contenu." });
    }

    // Définir les en-têtes pour la vidéo
    res.set("Content-Type", video.video.contentType);
    res.send(video.video.video); // Envoyer le buffer de la vidéo
  } catch (error) {
    console.error("Erreur lors de la récupération de la vidéo :", error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération de la vidéo." });
  }
};