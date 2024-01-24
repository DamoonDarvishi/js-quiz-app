import React from "react";

function Question({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => {
          return (
            <button
              className={`btn btn-option ${answer === index ? "answer" : ""} ${
                hasAnswered
                  ? index === question.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              disabled={hasAnswered}
              key={option}
              onClick={() => dispatch({ type: "NEW_ANSWER", payload: index })}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
