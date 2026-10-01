const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nom du fichier vidéo
  video: { type: Buffer, required: true }, // Données binaires de la vidéo
  contentType: { type: String, required: true }, // Type MIME (ex: video/mp4)
});

const ContentBlockSchema = new mongoose.Schema({
  title: { type: String, required: true },
  paragraph: { type: String },
  video: { type: VideoSchema }, // Peut être null
});

const PedagogicalContentSchema = new mongoose.Schema({
  className: { type: String, required: true },
  chapterName: { type: String, required: true },
  title: { type: String, required: true },
  contents: [ContentBlockSchema],
});

module.exports = mongoose.model('PedagogicalContent', PedagogicalContentSchema);
