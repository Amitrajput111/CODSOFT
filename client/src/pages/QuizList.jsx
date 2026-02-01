import { useEffect, useState } from "react";
import api from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/quizzes").then((res) => setQuizzes(res.data));
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.map((q) => (
        <div key={q._id}>
          <span>{q.title}</span>
          <button onClick={() => navigate(`/quiz/${q._id}`)}>Start</button>
        </div>
      ))}
    </div>
  );
}
