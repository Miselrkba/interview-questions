import React, { useState, useEffect } from "react";
import { data } from "./data";

import "./App.css";
import { Questionaire } from "./components/Questionaire";
import { Buttons } from "./components/Buttons";

function App() {
  const [question, setQuestion] = useState("");
  // const [isChecked, setIsChecked] = useState(true);
  const [count, setCount] = useState(0);

  const questions = data.map((item) => item.question);

  const nextQuestion = () => {
    setCount(count + 1 );
    if(count > questions.length){alert('your reached last question')}
    setQuestion(questions[count]);
    console.log(count);
  };

  const prevQuestion = () => {
    setCount(count - 1 );
    if(count === -1){return}
    setQuestion(questions[count]);
    console.log(count);
  };

  const getQuestion = () => {};

  const randomQuestion = () => {
    const rand = Math.floor(Math.random() * questions.length);
    const anyQuestion = questions[rand];
    setQuestion(anyQuestion);
  };

  useEffect(randomQuestion, []);

  return (
    <div className="App">
      <Questionaire question={question} />
      <Buttons
        getQuestion={getQuestion}
        prevQuestion={prevQuestion}
        nextQuestion={nextQuestion}
        randomQuestion={randomQuestion}
      />
    </div>
  );
}

export default App;
