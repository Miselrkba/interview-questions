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
        <h3 className='navbar-html'>
          Html
          <input type="checkbox" onChange={handleHtmlChange} />
        </h3>
        <h3 className='navbar-css'>
          Css
          <input type="checkbox" onChange={handleCssChange} />
        </h3>
        <h3 className='navbar-js'>
          JavaScript
          <input type="checkbox" onChange={handleJsChange} />
        </h3>
        <h3 className='navbar-react'>
          React
          <input type="checkbox" onChange={handleReactChange} />
        </h3>
      </nav>
      <div></div>
    </>
  );
};
