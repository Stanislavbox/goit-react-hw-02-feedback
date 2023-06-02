
const Statistics = ({ options, total, positivePercentage }) => {
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
};

export default Statistics;