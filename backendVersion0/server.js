const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const authAdminRoutes = require("./routes/authadminRoutes");
const classRoutes = require("./routes/AjoutKidsRoutes");
const quizRoutes = require("./routes/quizRoutes");
const GetclassRoutes = require('./routes/classRoutes');
const userRoutes = require('./routes/userRoutes'); 
const ClubRoutes = require('./routes/clubNameRoutes'); 
const AjouteclubRoutes = require('./routes/clubRoutes'); 
const GetClassAdminRoutes = require('./routes/classeGetRoutes'); 
const AjoutclassAdminRoutes = require('./routes/AjoutclassRoutes'); 
const GetTeachersRoutes = require('./routes/GetTeacherRoutes'); 
const pedagogicalContentRoutes = require('./routes/GetContenuRoutes');
const quizAdminRoutes = require('./routes/QuizAdminRoutes');
const kidRoutes = require('./routes/ListeKidsRoutes');
const GetpedagogicalContentRoutes = require('./routes/GetContenuKidsRoutes');
const MatriculeKidsRoutes = require('./routes/matriculeKidsRoutes');
const getClassesByName = require('./controller/Kids/GetClassKidController');
const faireQuizRoutes = require('./routes/faireQuizRoutes');
const AjoutpedagogicalContentRoutes = require('./routes/pedagogicalContentRoutes');
const ChapterKidsRoutes = require('./routes/ChapterKidsRoutes');
const ClubClassRoutes = require('./routes/ClubClassRoutes');
const programRoutes = require('./routes/programRoutes');


const app = express();


dotenv.config();

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Configuration CORS
const corsOptions = {
  origin: ["http://localhost:5173", "https://sci-kids-77f48.web.app/","https://backendversion0.onrender.com"], // Ajouter toutes les origines nécessaires
  methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
  credentials: true, // Autorise les cookies et l'authentification
};
app.use(cors(corsOptions)); // Activer CORS avec des options

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/User")
  .then(() => console.log("Connecté à MongoDB avec succès !"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Routes
app.use("/api/pedagogical-content", GetpedagogicalContentRoutes);
app.use("/api/pedagogical-content", AjoutpedagogicalContentRoutes);
app.use("/api/pedagogical-content", ChapterKidsRoutes);
app.use("/api/login", authRoutes);
app.use("/api/authen", authAdminRoutes);
app.use("/api/users", classRoutes); 
app.use('/api', quizRoutes);
app.use('/api/classes', GetclassRoutes);
app.use('/api', userRoutes); 
app.use("/api", ClubRoutes);
app.use('/api/club', AjouteclubRoutes);
app.use('/api/classe', GetClassAdminRoutes);
app.use('/api/classes', AjoutclassAdminRoutes);
app.use("/api/teachers", GetTeachersRoutes);
app.use('/api', pedagogicalContentRoutes);
app.use('/api/quizzes', quizAdminRoutes);
app.use('/api/faire-quiz', faireQuizRoutes); 
app.use('/api/classes', kidRoutes);
app.use('/api', MatriculeKidsRoutes);
app.use('/api', ClubClassRoutes);
app.use('/api', programRoutes);
app.get('/api/kids/classes/:name', getClassesByName);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("✅ Backend Render is up and running!");
});
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});