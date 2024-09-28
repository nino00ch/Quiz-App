import React from "react";
import "./QuizApp.css";
import QuizLogo from "../../assets/logo.svg";
function QuizApp({ startQuiz }) {
  const handleStart = () => {
    startQuiz(10);
  };

  return (
    <div>
      <div className="part1">
        <div className="Logo">
          <img src={QuizLogo} alt="" />
        </div>
        <h1>Test your knowledge!</h1>
        <h4>Challenge yourself with randomly generated quizzes</h4>
        <button onClick={handleStart}>Let's Get Started </button>
      </div>
    </div>
  );
}

export default QuizApp;
