
const Feedback = ({ onFeedback }) => {
  return (
    <div className="feedback-wrapp">
      <h2>Please leave feedback</h2>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
    </div>
  );
};

export default Feedback;