export const Options = ({ onFeedback }) => {
  return (
    <div>
      <button className="list-buttons" onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className="list-buttons" onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className="list-buttons" onClick={() => onFeedback("bad")}>
        Bad
      </button>
    </div>
  );
};
