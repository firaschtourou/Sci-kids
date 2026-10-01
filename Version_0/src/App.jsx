{/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { LoginAdmin } from './assets/LoginAdmin/LoginAdmin'
import { Dashboard } from './assets/AccountsAdmin/Dashboard'
import { DashboardLayout } from './assets/AdminAjouterAccounts/DashboardLayout'
import { DashboardClubsAdmin } from './assets/ClubsAdmin copy/DashboardClubsAdmin';
import { DashboardAjouterClub } from './assets/AdminAjouterClub/DashboardAjouterClub';
import { DashboardClassesAdmin } from './assets/ClassesAdmin/DashboardClassesAdmin';
import { DashboardAjouterClasse } from './assets/AdminAjouteClasse/DashboardAjouterClasse';
import { DashboardQuizAdmin } from './assets/QuizAdmin/DashboardQuizAdmin';
import { DashboardChaptersAdmin } from './assets/ChaptersAdmin/DashboardChaptersAdmin';
import { DashboardAjouterQuiz } from './assets/AdminAjouterQuiz/DashboardAjouterQuiz';
import { DashboardAjouterChapiter } from './assets/AdminAjouterChapiter/DashboardAjouterChapiter';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginAdmin />} />
          <Route path="/AccountAdmin" element={<Dashboard />} />
          <Route path="/AjouterAccount" element={<DashboardLayout />} />
          <Route path="/ClubsAdmin" element={<DashboardClubsAdmin/>} />
          <Route path="/AjouterClub" element={<DashboardAjouterClub/>} />
          <Route path="/ClassesAdmin" element={<DashboardClassesAdmin/>} />
          <Route path="/AjouterClasse" element={<DashboardAjouterClasse/>} />
          <Route path="/QuizAdmin" element={<DashboardQuizAdmin/>} />
          <Route path="/ChaptersAdmin" element={<DashboardChaptersAdmin/>} />
          <Route path="/AjouterQuiz" element={<DashboardAjouterQuiz/>} />
          <Route path="/AjouterChapters" element={<DashboardAjouterChapiter/>} />
        </Routes>
      </div>
    </Router>
      
      
   
  )
}

export default App */}

{/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authen from "./assets/KidsPages/KidsPages/Authen/Authentification";
import SaveNamePage from "./assets/KidsPages/KidsPages/SaveName/SaveName";
import Dashboard from "./assets/KidsPages/KidsPages/Dashbord/Dashbord";
import Consulter from "./assets/KidsPages/KidsPages/Consulter/Consulter";
import Quiz from "./assets/KidsPages/KidsPages/QuizKid/DashboradQuiz";
import VoirCours from "./assets/KidsPages/KidsPages/VoirCours/VoirCours";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authen />} />
        <Route path="/save-name" element={<SaveNamePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coursKids" element={<Consulter />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/voircours" element={<VoirCours />} />
      </Routes>
    </Router>
  );
};

export default App; */}


{/*import react from 'react'
import { LoginTeacher } from './assets/LoginTeacher/LoginTeacher'
import Classes from './assets/DashboardTeacher/LesClasses'
import ListeClasses from './assets/DashboardTeacher/ListeDeClasse'
import ADDChild from './assets/DashboardTeacher/ajoutEnfant'
import CoursTeacher from './assets/DashboardTeacher/cours'
import Quiz from './assets/DashboardTeacher/Quiz'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginTeacher />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/class-details/:className" element={<ListeClasses />} />
          <Route path="/ajouter-enfant" element={<ADDChild />} />
          <Route path="/cours" element={<CoursTeacher />} />
          <Route path="/quiz" element={< Quiz />} />
        </Routes>
      </Router>
    </>
  )
}

export default App*/ }


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  WhoAreYou  from './assets/WhoAreYou/WhoAreYou'
import Authen from "./assets/KidsPages/KidsPages/Authen/Authentification";
import { LoginTeacher } from './assets/LoginTeacher/LoginTeacher'
import Classes from './assets/DashboardTeacher/LesClasses'
import ListeClasses from './assets/DashboardTeacher/ListeDeClasse'
import ADDChild from './assets/DashboardTeacher/ajoutEnfant'
import CoursTeacher from './assets/DashboardTeacher/cours'
import Quiz from './assets/DashboardTeacher/Quiz'
import SaveNamePage from "./assets/KidsPages/KidsPages/SaveName/SaveName";
import Dashboard from "./assets/KidsPages/KidsPages/Dashbord/Dashbord";
import Consulter from "./assets/KidsPages/KidsPages/Consulter/Consulter";
import QuizKids from "./assets/KidsPages/KidsPages/QuizKid/DashboradQuiz";
import VoirCours from "./assets/KidsPages/KidsPages/VoirCours/VoirCours";
import Blockly from "./assets/KidsPages/KidsPages/Blockley/Blockly";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<WhoAreYou />} />
        <Route path="/loginkid" element={<Authen />} />
        <Route path="/LoginTeacher" element={<LoginTeacher />} />
        <Route path="/classes" element={<Classes />} />
          <Route path="/class-details/:className" element={<ListeClasses />} />
          <Route path="/ajouter-enfant" element={<ADDChild />} />
          <Route path="/cours" element={<CoursTeacher />} />
          <Route path="/quiz" element={< Quiz />} />
          <Route path="/savename" element={<SaveNamePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coursKids" element={<Consulter />} />
        <Route path="/quizkid" element={<QuizKids />} />
        <Route path="/voircours" element={<VoirCours />} />
        <Route path="/blockly" element={<Blockly />} />
        </Routes>
      </Router>

    </>

)
}
export default App
  