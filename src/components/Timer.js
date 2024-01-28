import React, { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;
  console.log(secs);
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {secs < 10 && "0"}
      {secs}
      {/* {secondRemaining} */}
    </div>
  );
}

export default Timer;
