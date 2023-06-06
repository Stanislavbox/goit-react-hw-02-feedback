import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { options, total, positivePercentage } = this.props;
    return (
      <div className="statistics-wrapp">
        <h3>Statistics</h3>
        <p>Good: {options.good}</p>
        <p>Natural: {options.neutral}</p>
        <p>Bad: {options.bad}</p>
        <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;