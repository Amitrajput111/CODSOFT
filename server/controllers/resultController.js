const Result = require("../models/Result");
const Quiz = require("../models/Quiz");

exports.submitQuiz = async (req, res) => {
  const { answers } = req.body;

  const quiz = await Quiz.findById(req.params.quizId);
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });

  let score = 0;
  quiz.questions.forEach((q, index) => {
    if (answers[index] === q.correctAnswer) score++;
  });

  const result = await Result.create({
    userId: req.userId,
    quizId: quiz._id,
    score,
    answers
  });

  res.json({
    score,
    total: quiz.questions.length,
    correctAnswers: quiz.questions.map(q => q.correctAnswer)
  });
};

exports.getMyResults = async (req, res) => {
  const results = await Result.find({ userId: req.userId })
    .populate("quizId", "title");
  res.json(results);
};
