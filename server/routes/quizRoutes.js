const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createQuiz,
  getQuizzes,
  getQuizById
} = require("../controllers/quizController");

router.post("/", auth, createQuiz);
router.get("/", getQuizzes);
router.get("/:id", getQuizById);

module.exports = router;
