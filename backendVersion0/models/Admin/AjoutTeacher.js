// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String,  required: true, unique: true},
  skills: { type: String, required: true },
  matter: { type: String, required: true },
  password: { type: String,  required: true, unique: true},
  roles: { type: String, default: 'Teacher' },
  active: { type: Boolean, default: 'false' },
  matricule: { type: String, unique: true, sparse: true },
});

const User = mongoose.model('users', userSchema);
module.exports = User;

