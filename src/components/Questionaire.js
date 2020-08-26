import React from "react";

export const Questionaire = ({
  question,
  answer,
  html,
  data,
  handleHtml,
  count,
  css,
  handleCss,
  javascript,
  handleJs,
  react,
  handleReact,
}) => {
  const handleHtmlChange = (e) => {
    handleHtml(e.target.checked);
  };
  const handleCssChange = (e) => {
    handleCss(e.target.checked);
  };
  const handleJsChange = (e) => {
    handleJs(e.target.checked);
  };
  const handleReactChange = (e) => {
    handleReact(e.target.checked);
  };

  // const getHtml = data.filter((x) => x.language === "Html");
  // const getCss = data.filter((x) => x.language === "Css");
  // const getJs = data.filter((x) => x.language === "JavaScript");
  // const getReact = data.filter((x) => x.language === "React");

  // const oneHtmlQuestion = getHtml.map((item) => item.question);
  // const oneCssQuestion = getCss.map((item) => item.question);
  // const oneJsQuestion = getJs.map((item) => item.question);
  // const oneReactQuestion = getReact.map((item) => item.question);

  // const htmlCss = oneHtmlQuestion.concat(oneCssQuestion);

  // if Html is checked i want to have and array that displays only html questions

  return (
    <>
      <nav className="navbar">
        <h1>
          Html
          <input type="checkbox" checked={html} onChange={handleHtmlChange} />
        </h1>
        <h1>
          Css
          <input type="checkbox" checked={css} onChange={handleCssChange} />
        </h1>
        <h1>
          JavaScript
          <input
            type="checkbox"
            checked={javascript}
            onChange={handleJsChange}
          />
        </h1>
        <h1>
          React
          <input type="checkbox" checked={react} onChange={handleReactChange} />
        </h1>
      </nav>
      <div>
        {/* <h3>
          Question:{" "}
          {html
            ? oneHtmlQuestion[count]
            : css
            ? oneCssQuestion[count]
            : javascript
            ? oneJsQuestion[count]
            : react
            ? oneReactQuestion[count]
            : question}
        </h3> */}
{/* 
        <h3>Question: {question}</h3>
        <h3>Answer: {answer} </h3> */}
      </div>
    </>
  );
};
