import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import "../css/SelectedCategory.css";

function SelectedCategory() {
  const { questions, setScore } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  // Handle answer click
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Check if the selected answer is correct
    if (answer === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1); // Update score if correct
    }

    // Delay before moving to the next question
    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigate("/result"); // Navigate to the Result component when quiz ends
      }
    }, 1000);
  };

  return (
    <div className="container">
      {currentQuestion && (
        <div className="question-section">
          <div className="question">
            <h5>{currentQuestion.question}</h5>
            <p>
              {currentQuestionIndex + 1} / {questions.length}
            </p>
          </div>
          <div className="answer-section">
            {[
              ...currentQuestion.incorrect_answers,
              currentQuestion.correct_answer,
            ]
              .sort()
              .map((answer, index) => (
                <p
                  key={index}
                  className={`answer-button ${
                    selectedAnswer === answer
                      ? answer === currentQuestion.correct_answer
                        ? "correct"
                        : "incorrect"
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(answer)}
                >
                  {answer}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectedCategory;
