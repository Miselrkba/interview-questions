import React from "react";

export const Buttons = ({ nextQuestion, randomQuestion, prevQuestion }) => {
  return (
    <>
      <button className="btn" onClick={prevQuestion}>previous question</button>
      <button className="btn" onClick={nextQuestion}>next question</button>
      <div>
        <button className="btn" onClick={randomQuestion}>random question</button>
      </div>
    </>
  );
};
