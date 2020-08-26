import React from "react";

export const Buttons = ({ nextQuestion, randomQuestion, prevQuestion }) => {
  return (
    <>
      <button onClick={prevQuestion}>previous question</button>
      <button onClick={nextQuestion}>next question</button>
      <div>
        <button onClick={randomQuestion}>random question</button>
      </div>
    </>
  );
};
