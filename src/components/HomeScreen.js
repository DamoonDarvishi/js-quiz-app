import React from "react";

function HomeScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Javascript Quiz!</h2>
      <h3> There are {numQuestions} questions about JS and React.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "START" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default HomeScreen;
