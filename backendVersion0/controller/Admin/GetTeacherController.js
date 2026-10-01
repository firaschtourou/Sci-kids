const User = require("../../models/Admin/AjoutTeacher"); // Renommer le modèle en Teacher

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find();
    res.status(200).json(teachers);
  } catch (error) {
    console.error(error); // Afficher l'erreur dans la console
    res.status(500).json({ message: "Erreur lors de la récupération des enseignants.", error: error.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const teacher = await User.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Enseignant non trouvé." });
    }
    res.status(200).json({ message: "Enseignant supprimé avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression de l'enseignant.", error: error.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Enseignant non trouvé." });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour de l'enseignant.", error: error.message });
  }
};

const toggleActiveTeacher = async (req, res) => {
  try {
    const teacher = await User.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Enseignant non trouvé." });
    }

    // Inverser l'état `active`
    teacher.active = !teacher.active;

    await teacher.save();
    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la modification de l'état.", error: error.message });
  }
};

const getTeachersCount = async (req, res) => {
  try {
    const totalTeachers = await User.countDocuments({});
    const activeTeachers = await User.countDocuments({ active: true });
    res.status(200).json({ totalTeachers, activeTeachers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération des statistiques.", error: error.message });
  }
};

module.exports = { getAllTeachers, deleteTeacher, updateTeacher, toggleActiveTeacher, getTeachersCount };
