import React from "react";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => {
          return (
            <button
              className="btn btn-option"
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
