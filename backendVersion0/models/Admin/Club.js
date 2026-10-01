const mongoose = require('mongoose');

// Définir le modèle Club avec un champ teacher de type String
const clubSchema = new mongoose.Schema({
  clubName: { type: String, required: true },
  speciality: { type: String, required: true },
  teacher: { type: String, required: true }  // Changement ici pour accepter un nom en texte
});

const Club = mongoose.model('Club', clubSchema);
module.exports = Club;
