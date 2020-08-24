import React from "react";

export const Questionaire = ({ question, answer }) => {
  return (
    <>
      <nav className="navbar">
        <h1>
          Html
          <input type="checkbox" />
        </h1>
        <h1>
          Css
          <input type="checkbox" />
        </h1>
        <h1>
          JavaScript
          <input type="checkbox" />
        </h1>
        <h1>
          React
          <input type="checkbox" />
        </h1>
      </nav>
      <div>
        <h3>Question: {question}</h3>
        <h3>Answer: {answer} </h3>
      </div>
    </>
  );
};
