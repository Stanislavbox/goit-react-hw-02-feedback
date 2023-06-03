import PropTypes from "prop-types";

import { FeedbackWrapp, Button } from "./Feedback.styled";

const Feedback = ({ onFeedback }) => {
  return (
    <FeedbackWrapp>
      <h2>Please leave feedback</h2>
      <Button onClick={() => onFeedback("good")}>Good</Button>
      <Button onClick={() => onFeedback("neutral")}>Neutral</Button>
      <Button onClick={() => onFeedback("bad")}>Bad</Button>
    </FeedbackWrapp>
  );
};

Feedback.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};

export default Feedback;