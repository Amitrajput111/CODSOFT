import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TakeQuiz() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  return (
    <>
      <h2>Sample Quiz</h2>
      <p>What is React?</p>

      <input
        placeholder="Your answer"
        onChange={e => setAnswer(e.target.value)}
      />

      <br /><br />
      <button onClick={() => navigate("/result")}>
        Submit Quiz
      </button>
    </>
  );
}
