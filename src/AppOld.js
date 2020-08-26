import React from "react";
import { data } from "./data";

import "./App.css";
import { Questionaire } from "./components/Questionaire";
import { Buttons } from "./components/Buttons";

class App extends React.Component {
  state = {
    count: 0,
    html: false,
    css: false,
    javascript: false,
    react: false,
  };

  // result = [];

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
  }
// get current item index
// index +1 if 

    // get array length
    // if not 0 or null or undefined
    // get index of current item
    // 

    // get current 

  //   if(result[index]){

  //   }

  // };

  render() {
    

    const questions = data.map((item) => item.question);
    const answers = data.map((item) => item.answer);

    const getHtml = data.filter((x) => x.language === "Html");
    const getCss = data.filter((x) => x.language === "Css");
    const getJs = data.filter((x) => x.language === "JavaScript");
    const getReact = data.filter((x) => x.language === "React");

    const oneHtmlQuestion = getHtml.map((item) => item.question);
    const oneCssQuestion = getCss.map((item) => item.question);
    const oneJsQuestion = getJs.map((item) => item.question);
    const oneReactQuestion = getReact.map((item) => item.question);

    let result = [];

    if (this.state.html) {
      result.push(...oneHtmlQuestion);
    }
    if (this.state.css) {
      result.push(...oneCssQuestion);
    }
    if (this.state.javascript) {
      result.push(...oneJsQuestion);
    }
    if (this.state.react) {
      result.push(...oneReactQuestion);
    }

    console.log(result);

    return (
      <div className="App">
        <h1>Interview Questions</h1>
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
        <h3>Question: {result[this.state.count]}</h3>
        <h3>Answer: </h3>

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
