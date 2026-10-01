const PedagogicalContent = require("../../models/Admin/pedagogicalContent");

// Récupérer tous les contenus pédagogiques
exports.getAllPedagogicalContents = async (req, res) => {
  try {
    const contents = await PedagogicalContent.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des contenus pédagogiques.", error });
  }
};

// Récupérer une vidéo par son ID
exports.getVideo = async (req, res) => {
  try {
    const content = await PedagogicalContent.findById(req.params.id);

    if (!content) {
      return res.status(404).json({ message: "Vidéo non trouvée." });
    }

    // Définir le type de contenu et envoyer la vidéo
    res.set("Content-Type", content.contents[0].video.contentType); // Assurez-vous que le type MIME est correct
    res.send(content.contents[0].video.video); // Envoyer les données binaires de la vidéo
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de la vidéo.", error });
  }
};