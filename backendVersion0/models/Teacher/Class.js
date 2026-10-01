const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  ageLevel: { type: String, required: true },
  teacherName: { type: String, required: true },
  matricule: { type: String, required: true },
});

const Class = mongoose.model('classes', classSchema);

module.exports = Class;
