import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FeedbackWrapp, Button } from "./Feedback.styled";

export class Feedback extends Component {
  render() {
    const { options, onFeedback } = this.props;
    return (
      <FeedbackWrapp>
        {options.map(option => (
          <Button
            key={option}
            onClick={() => onFeedback(option)}>
            {option}
          </Button>
        ))}
      </FeedbackWrapp>
    );
  }
}

Feedback.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};