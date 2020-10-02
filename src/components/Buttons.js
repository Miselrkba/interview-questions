import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    margin: "0.5em",
    borderRadius: "1em",
    textTransform: "capitalize",
  },
}));

export const Buttons = ({ nextQuestion, randomQuestion, prevQuestion }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          size="small"
          onClick={prevQuestion}
          component="button"
        >
          Previous Question
        </Button>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          size="small"
          onClick={nextQuestion}
          component="button"
        >
          Next question
        </Button>
      </div>
      <Button
        className={classes.buttonStyles}
        variant="contained"
        size="small"
        onClick={randomQuestion}
      >
        Random question
      </Button>
    </React.Fragment>
  );
};
