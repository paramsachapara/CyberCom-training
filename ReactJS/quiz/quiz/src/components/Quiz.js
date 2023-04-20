import "./Quiz.css";
import React, { useState } from "react";
import RadioInput from "./RadioInput";
import Result from "./Result";
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in the solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["Everest", "Kilimanjaro", "Denali", "Aconcagua"],
    answer: "Everest",
  },
  {
    question: "Who wrote the Harry Potter series of books?",
    options: [
      "J.K. Rowling",
      "Stephen King",
      "Dan Brown",
      "George R.R. Martin",
    ],
    answer: "J.K. Rowling",
  },
];
function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  let [correctAnswer, setcorrectAnswer] = useState(0);
  let [selectedOption, setselectedOption] = useState("");
  const [result, setResult] = useState(false);
  const handleOptionChange = (event) => {
    setselectedOption(event.target.value);
  };
  function answer(answer) {
    if (answer === questions[activeQuestion].answer) {
      setcorrectAnswer((correctAnswer += 1));
      const nextQuestionIndex = activeQuestion + 1;
      if (nextQuestionIndex >= questions.length) {
        setResult(true);
      } else {
        setActiveQuestion(nextQuestionIndex);
      }
    } else {
      const nextQuestionIndex = activeQuestion + 1;
      if (nextQuestionIndex >= questions.length) {
        setResult(true);
      } else {
        setActiveQuestion(nextQuestionIndex);
      }
    }
  }
  return (
    <>
      {result ? (
        <Result correctAnswer={correctAnswer} questions={questions} />
      ) : (
        <div className="quiz-container">
          <h2>{questions[activeQuestion].question}</h2>
          {questions[activeQuestion].options.map((option, index) => (
            <RadioInput
              key={index}
              id={`option-${index}`}
              name="quiz-options"
              value={option}
              checked={selectedOption === option}
              label={option}
              onChange={handleOptionChange}
            />
          ))}
          <button
            onClick={() => {
              answer(selectedOption);
            }}
          >
            Next Question
          </button>
        </div>
      )}
    </>
  );
}

export default Quiz;
