import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios.jsx";

export default function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    api.get(`/quizzes/${id}`).then((res) => setQuiz(res.data));
  }, [id]);

  if (!quiz) return <p>Loading...</p>;

  const submit = async () => {
    const res = await api.post(`/results/${id}`, { answers });
    navigate("/result", { state: res.data });
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>
          {q.options.map((op, j) => (
            <label key={j}>
              <input
                type="radio"
                name={i}
                onChange={() =>
                  setAnswers({ ...answers, [i]: op })
                }
              />
              {op}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submit}>Submit</button>
    </div>
  );
}
