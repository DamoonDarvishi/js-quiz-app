import React from "react";

function Progress({ index, numQuestion, points, answer, maxPossiblePoints }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestion} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
