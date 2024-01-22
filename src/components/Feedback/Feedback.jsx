import { Notification } from "../Notification/Notification";

export const Feedback = ({ feedbackTypes }) => {
  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {feedbackTypes.good}</p>
          <p>Neutral: {feedbackTypes.neutral}</p>
          <p>Bad: {feedbackTypes.bad}</p>
        </>
      ) : (
        <Notification />
      )}
    </div>
  );
};
