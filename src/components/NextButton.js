import React from "react";

function NextButton({ dispatch, answer }) {
  //   if (answer === null) return null;
  return answer ? (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "NEXT_QUESTION" })}
    >
      Next
    </button>
  ) : null;
}

export default NextButton;
