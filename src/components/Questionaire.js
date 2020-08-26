import React from "react";

export const Questionaire = ({
  handleHtml,
  handleCss,
  handleJs,
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

  return (
    <>
      <nav className="navbar">
        <h1>
          Html
          <input type="checkbox" onChange={handleHtmlChange} />
        </h1>
        <h1>
          Css
          <input type="checkbox" onChange={handleCssChange} />
        </h1>
        <h1>
          JavaScript
          <input type="checkbox" onChange={handleJsChange} />
        </h1>
        <h1>
          React
          <input type="checkbox" onChange={handleReactChange} />
        </h1>
      </nav>
      <div></div>
    </>
  );
};
