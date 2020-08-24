import React from "react";

export const Buttons = ({
  getQuestion,
  nextQuestion,
  randomQuestion,
  prevQuestion,
}) => {
  return (
    <>
      <div>
        <button onClick={getQuestion}>start</button>
      </div>
      <button onClick={prevQuestion}>previous question</button>
      <button onClick={nextQuestion}>next question</button>
      <button onClick={randomQuestion}>random question</button>
    </>
  );
};
