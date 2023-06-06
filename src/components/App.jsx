import React, { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Section } from './Section/Section';
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = grade => {
    this.setState(prevState => ({
      ...prevState,
      [grade]: prevState[grade] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    return (
      <div>
        <div className="container">
          <Section title='Please leave feedback'>
          <Feedback options={['good', 'neutral', 'bad']} onFeedback={this.handleClick} />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              options={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;