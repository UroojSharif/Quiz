import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

function FinalResult() {
  const { score, questions, setScore } = useContext(QuizContext);
  const navigate = useNavigate();

  const resetQuiz = () => {
    navigate("/quiz");
    setScore(0);
  };

  let resultMessage;
  if (score >= 6) {
    resultMessage = "Congratulations! You did a great job. :)";
  } else {
    resultMessage = "Nice try but you can do better!!";
  }

  return (
    <div className="container">
      <h2>
        Your Score: {score} / {questions.length}
      </h2>
      <h4>{resultMessage}</h4>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </div>
  );
}

export default FinalResult;
