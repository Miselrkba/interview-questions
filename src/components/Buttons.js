import React from "react";

export const Buttons = ({getQuestion, nextQuestion, randomQuestion, prevQuestion}) => {
  return (
    <>
      <button onClick={getQuestion}>question</button>
      <button onClick={prevQuestion}>previous question</button>
      <button onClick={nextQuestion}>next question</button>
      <button onClick={randomQuestion}>random question</button>
    </>
  );
};
