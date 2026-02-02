import { useNavigate } from "react-router-dom";

export default function QuizList() {
  const navigate = useNavigate();

  const quizzes = [
    { _id: "1", title: "JavaScript Basics" },
    { _id: "2", title: "React Fundamentals" },
  ];

  return (
    <>
      <h2>Available Quizzes</h2>
      {quizzes.map(q => (
        <div key={q._id}>
          <b>{q.title}</b>
          <button onClick={() => navigate(`/quiz/${q._id}`)}>
            Start Quiz
          </button>
        </div>
      ))}
    </>
  );
}
