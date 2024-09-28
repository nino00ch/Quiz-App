import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import QuizApp from "./components/quizApp/QuizApp";
import QuizPage from "./components/quizApp/QuizPage";
import ResultPage from "./components/quizApp/ResultPage";

function App() {
  const [step, setStep] = useState(1); // 1: Home, 2: Quiz, 3: Result
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startQuiz = (total) => {
    setTotalQuestions(total);
    setStep(2);
  };

  const endQuiz = (finalScore, userAnswers, questions) => {
    setScore(finalScore);
    setQuestions(questions);
    setUserAnswers(userAnswers);
    setStep(3);
  };

  const resetQuiz = () => {
    setScore(0);
    setQuestions([]);
    setUserAnswers([]);
    setTotalQuestions(0);
    setStep(1);
  };

  return (
    <div className="App">
      {step === 1 && <QuizApp startQuiz={startQuiz} />}
      {step === 2 && <QuizPage endQuiz={endQuiz} />}
      {step === 3 && (
        <ResultPage
          score={score}
          questions={questions}
          userAnswers={userAnswers}
          totalQuestions={totalQuestions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
