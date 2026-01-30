const router = require("express").Router();
const auth = require("../middleware/auth");
const { submitQuiz, getMyResults } = require("../controllers/resultController");

router.post("/:quizId/submit", auth, submitQuiz);
router.get("/me", auth, getMyResults);

module.exports = router;
