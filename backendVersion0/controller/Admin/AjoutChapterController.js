const PedagogicalContent = require('../../models/Admin/pedagogicalContent');

exports.addPedagogicalContent = async (req, res) => {
  try {
    const { className, chapterName, title, contents } = req.body;

    // Vérifier si les champs obligatoires sont présents
    if (!className || !chapterName || !title || !contents) {
      return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }

    // Parser les contenus (envoyés sous forme de JSON)
    let parsedContents;
    try {
      parsedContents = JSON.parse(contents);
    } catch (error) {
      console.error("Erreur lors du parsing des contenus :", error);
      return res.status(400).json({ message: "Format des contenus invalide." });
    }

    // Convertir les fichiers en objets Vidéo
    const videos = req.files ? req.files.map((file) => ({
      name: file.originalname,
      video: file.buffer, // Stocker le fichier en tant que Buffer
      contentType: file.mimetype, // Type MIME du fichier
    })) : [];

   
    
    // Associer chaque vidéo à son contenu
    const newContents = parsedContents.map((content, index) => ({
      ...content,
      video: videos[index] || null, // Associer chaque vidéo à son contenu
    }));

    // Créer un nouveau contenu pédagogique
    const newContent = new PedagogicalContent({
      className,
      chapterName,
      title,
      contents: newContents,
    });

    // Sauvegarder dans la base de données
    await newContent.save();
    res.status(201).json({ message: "Contenu pédagogique ajouté avec succès !", content: newContent });
  } catch (error) {
    console.error("Erreur lors de l'ajout du contenu pédagogique :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout du contenu pédagogique.", error: error.message });
  }
};