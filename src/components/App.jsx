
import React, { Component } from "react";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (grade) => 
    this.setState((prevState) => ({ [grade]: prevState[grade] + 1}));

  countTotalFeedback = () =>{
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <div>
        <div className="container">
          <Feedback onFeedback={this.handleClick}/>
          <Statistics options={this.state} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
        </div>
      </div>
    );
  }
}

export default App;