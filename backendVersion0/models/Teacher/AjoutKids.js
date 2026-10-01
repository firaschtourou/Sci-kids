// models/Kid.js
const mongoose = require('mongoose');

const kidSchema = new mongoose.Schema({
    name: { type: String, required: true },
    matricule: { type: String, required: true, unique: true },
    className: { type: String, required: true },
    role: { type: String, default: 'kid' },
});

module.exports = mongoose.model('kids', kidSchema);