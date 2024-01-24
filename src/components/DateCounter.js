import { useReducer } from "react";

const initialStates = { count: 0, step: 1 };

function reducer(state, action) {
  // console.log(state, action);
  // return { count: 0, step: 1 };
  // if (action.type === "DEC") return state - 1;
  // if (action.type === "INC") return state + action.payload;
  // if (action.type === "SETCOUNT") return action.payload;
  switch (action.type) {
    case "DEC":
      return { ...state, count: state.count - state.step };
    case "INC":
      return { ...state, count: state.count + state.step };
    case "SETCOUNT":
      return { ...state, count: action.payload };
    case "SETSTEP":
      return { ...state, step: action.payload };
    case "RESET":
      return initialStates;
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, initialStates);
  // const [step, setStep] = useState(1);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "DEC" });
    // setCount((prevState) => prevState - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "INC", payload: 1 });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "SETCOUNT", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "SETSTEP", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "RESET" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
