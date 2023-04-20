import React from "react";

function Result(props) {
  const { correctAnswer, questions } = props;
  const incorrectAnswer = questions.length - correctAnswer;
  return (
    <div className="result">
      <h1 style={{ marginLeft: "500px" }}>your RESULT</h1>
      <div style={{ border: "1px solid black", marginLeft: "100px" }}>
        <p>
          *your correct ans is
          <span style={{ color: "green" }}>{correctAnswer}</span>
        </p>
        <p>
          *your Incorrect ans is
          <span style={{ color: "red" }}>{incorrectAnswer}</span>
        </p>
      </div>
    </div>
  );
}

export default Result;
