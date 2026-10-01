const User = require("../../models/Teacher/AjoutKids");

const addOrUpdateKid = async (req, res) => {
  const { name, matricule, className } = req.body;

  console.log("Données reçues :", { name, matricule, className });

  if (!name || !matricule || !className) {
      return res.status(400).json({ message: "Name, matricule, and className are required" });
  }

  try {
      const updatedUser = await User.findOneAndUpdate(
          { matricule },
          { name, className, role: "kid" },
          { new: true, upsert: true }
      );

      res.status(200).json({ message: "Kid added/updated successfully", data: updatedUser });
  } catch (error) {
      res.status(500).json({ message: "Error adding/updating kid", error: error.message });
  }
};


module.exports = { addOrUpdateKid };