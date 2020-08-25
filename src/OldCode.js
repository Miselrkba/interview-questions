getQuestion = () => {
    this.setState({
      count: 0,
      question: questions[0],
      answer: answers[0]
    });
  };

 
  prevQuestion = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      question: questions[prevState.count - 1],
    }));
    
  };

  nextQuestion = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      question: questions[prevState.count + 1],
    }));
    
  };

  randomQuestion = () => {
    const rand = Math.floor(Math.random() * questions.length);
    const anyQuestion = questions[rand];
    const anyAnswer = answers[rand];
    this.setState({
      question: anyQuestion,
      answer: anyAnswer,
    });
  };