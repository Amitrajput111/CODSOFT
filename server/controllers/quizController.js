const Quiz = require("../models/Quiz");

exports.createQuiz = async (req, res) => {
  const { title, description, questions } = req.body;
  const quiz = await Quiz.create({
    title,
    description,
    questions,
    createdBy: req.userId
  });
  res.status(201).json(quiz);
};

exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find().select("title description createdAt");
  res.json(quizzes);
};

exports.getQuizById = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });
  res.json(quiz);
};
