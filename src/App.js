import React from "react";
import { data } from "./data";

import "./App.css";
import { Questionaire } from "./components/Questionaire";
import { Buttons } from "./components/Buttons";

const questions = data.map((item) => item.question);
const answers = data.map((item) => item.answer);

class App extends React.Component {
  state = {
    question: "",
    answer: "",
    count: 0,
  };

  getQuestion = () => {
    this.setState({
      count: 0,
      question: questions[0],
      answer: answers[0]
    });
  };

 
  prevQuestion = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      question: questions[prevState.count - 1],
    }));
    
  };

  nextQuestion = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      question: questions[prevState.count + 1],
    }));
    
  };

  randomQuestion = () => {
    const rand = Math.floor(Math.random() * questions.length);
    const anyQuestion = questions[rand];
    const anyAnswer = answers[rand];
    this.setState({
      question: anyQuestion,
      answer: anyAnswer,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.count}
        <Questionaire
          question={this.state.question}
          answer={this.state.answer}
        />
        <Buttons
          getQuestion={this.getQuestion}
          prevQuestion={this.prevQuestion}
          nextQuestion={this.nextQuestion}
          randomQuestion={this.randomQuestion}
        />
      </div>
    );
  }
}

export default App;
