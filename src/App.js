import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./App.css";
import { Questionaire } from "./components/Questionaire";
import { Buttons } from "./components/Buttons";

import { data } from "./data";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    margin: "0.5em",
    borderRadius: "1em",
    padding: " 0.5em",
    textTransform: "capitalize",
  },
}));

const App = () => {
  const classes = useStyles();

  //set state for count and languages
  const [count, setCount] = useState(0);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [react, setReact] = useState(false);
  const [toggle, setToggle] = useState(false);

  // filter and map questions
  const getHtml = data.filter((x) => x.language === "Html");
  const getCss = data.filter((x) => x.language === "Css");
  const getJs = data.filter((x) => x.language === "JavaScript");
  const getReact = data.filter((x) => x.language === "React");

  //get array of questions
  const oneHtmlQuestion = getHtml.map((item) => item.question);
  const oneCssQuestion = getCss.map((item) => item.question);
  const oneJsQuestion = getJs.map((item) => item.question);
  const oneReactQuestion = getReact.map((item) => item.question);

  //get array of answers
  const oneHtmlAnswer = getHtml.map((item) => item.answer);
  const oneCssAnswer = getCss.map((item) => item.answer);
  const oneJsAnswer = getJs.map((item) => item.answer);
  const oneReactAnswer = getReact.map((item) => item.answer);

  // push to question and answer array onChecked
  let question = [];
  let answer = [];

  if (html) {
    question.push(...oneHtmlQuestion);
    answer.push(...oneHtmlAnswer);
  }
  if (css) {
    question.push(...oneCssQuestion);
    answer.push(...oneCssAnswer);
  }
  if (js) {
    question.push(...oneJsQuestion);
    answer.push(...oneJsAnswer);
  }
  if (react) {
    question.push(...oneReactQuestion);
    answer.push(...oneReactAnswer);
  }

  //Questions handling
  const prevQuestion = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(question.length - 1);
    }
    if (question.length === 0) alert("please pick a language or library first");
  };

  const nextQuestion = () => {
    setCount(count + 1);
    if (question.length - 1 <= count) {
      setCount(0);
    }
    if (question.length === 0) alert("please pick a language or library first");
  };

  const randomQuestion = () => {
    const rand = Math.floor(Math.random() * question.length);
    setCount(rand);
    if (question.length === 0) alert("please pick a language or library first");
  };

  // click event to toggle Show answer
  const clicked = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="main-box">
        <h1>Interview Questions</h1>
        <p>please pick a language or library</p>
        <Questionaire
          handleHtml={setHtml}
          handleCss={setCss}
          handleJs={setJs}
          handleReact={setReact}
        />
        <h3>Question: </h3>
        <div className="question">{question[count]}</div>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          size="small"
          disabled={html || css || react || js ? false : true}
          onClick={clicked}
        >
          {toggle ? "Hide Answer" : "Show Answer"}
        </Button>
        <article className="answer"> {toggle ? answer[count] : null}</article>

        <Buttons
          prevQuestion={prevQuestion}
          nextQuestion={nextQuestion}
          randomQuestion={randomQuestion}
        />
      </div>
    </div>
  );
};

export default App;
