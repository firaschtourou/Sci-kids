const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  className: { type: String },
  ChapterName: { type: String, required: true },
  QuizName: { type: String, required: true },
  Questions: [
    {
      Question: { type: String, required: true },
      AnswerType: { type: String, enum: ['checkbox', 'radio'], required: true },
      Answers: [
        {
          text: { type: String, required: true },
          isCorrect: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

// Exportez le modèle
module.exports = mongoose.model('quizzes', quizSchema);