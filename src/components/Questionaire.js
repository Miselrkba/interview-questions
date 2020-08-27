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
        <h3>
          Html
          <input type="checkbox" onChange={handleHtmlChange} />
        </h3>
        <h3>
          Css
          <input type="checkbox" onChange={handleCssChange} />
        </h3>
        <h3>
          JavaScript
          <input type="checkbox" onChange={handleJsChange} />
        </h3>
        <h3>
          React
          <input type="checkbox" onChange={handleReactChange} />
        </h3>
      </nav>
      <div></div>
    </>
  );
};
