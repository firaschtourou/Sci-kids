// backend/controllers/codeController.js
const Code = require('../../models/Kids/Program');

// Sauvegarder le code
exports.saveCode = async (req, res) => {
  try {
    const { code } = req.body;
    const newCode = new Code({ code });
    await newCode.save();
    res.status(201).json({ message: 'Code saved successfully!', data: newCode });
  } catch (error) {
    res.status(500).json({ message: 'Error saving code', error });
  }
};

// Récupérer tous les codes
exports.getAllCodes = async (req, res) => {
  try {
    const codes = await Code.find().sort({ createdAt: -1 });
    res.status(200).json({ data: codes });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching codes', error });
  }
};