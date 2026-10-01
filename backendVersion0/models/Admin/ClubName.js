const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  clubName: { type: String, required: true }, // Nom du club
});

const clubName = mongoose.model("clubs", userSchema);

module.exports = clubName;
