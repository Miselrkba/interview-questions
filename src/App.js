import React from "react";
import { data } from "./data";

import "./App.css";
import { Questionaire } from "./components/Questionaire";
import { Buttons } from "./components/Buttons";

// const questions = data.map((item) => item.question);

class App extends React.Component {
  state = {
    count: 0,
    html: false,
    css: false,
    javascript: false,
    react: false,
  };

  handleHtml = (html) => {
    this.setState({
      html: html,
    });
  };
  handleCss = (css) => {
    this.setState({
      css: css,
    });
  };
  handleJs = (javascript) => {
    this.setState({
      javascript: javascript,
    });
  };
  handleReact = (react) => {
    this.setState({
      react: react,
    });
  };

  prevQuestion = () => {
    this.setState({
      count: this.state.count - 1,
    });
    if (this.state.count <= 0) {
      this.setState({ count: 0 });
    }
  };

  nextQuestion = () => {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count >= 11) {
      this.setState({ count: 0 });
    }
  };

  render() {
    const questions = data.map((item) => item.question);
    const answers = data.map((item) => item.answer);

    return (
      <div className="App">
        {this.state.count}
        <Questionaire
          question={questions[this.state.count]}
          answer={answers[this.state.count]}
          html={this.state.html}
          css={this.state.css}
          javascript={this.state.javascript}
          react={this.state.react}
          handleHtml={this.handleHtml}
          handleCss={this.handleCss}
          handleJs={this.handleJs}
          handleReact={this.handleReact}
          data={data}
          count={this.state.count}
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
