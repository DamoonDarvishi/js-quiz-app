import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import HomeScreen from "./HomeScreen";
import Question from "./Question";
import "./App.css";

const initialState = {
  questions: [],
  // loading , error , active , ready , finished
  status: "loading",
  index: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECIEVED":
      return { ...state, questions: action.payload, status: "ready" };
    case "DATA_FAILED":
      return { ...state, status: "error" };
    case "START":
      return { ...state, status: "active" };
    case "NEW_ANSWER":
      return { ...state, answer: action.payload };
    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer } = state;
  const numQuestions = questions.length;
  // console.log(state);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "DATA_RECIEVED", payload: data }))
      .catch((err) => dispatch({ type: "DATA_FAILED" }));
  }, []);
  return (
    <div className="app">
      <Header />
      {/* <DateCounter /> */}
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <HomeScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
