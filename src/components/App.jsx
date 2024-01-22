import "./App.css";
import { useState } from "react";

import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";

export const App = () => {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (item) => {
    setFeedbackTypes((prevTypes) => ({
      ...prevTypes,
      [item]: prevTypes[item] + 1,
    }));
  };

  const handleReset = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onFeedback={handleFeedback}
        onReset={handleReset}
        hasFeedback={totalFeedback}
      />
      <Feedback feedbackTypes={feedbackTypes} />
    </div>
  );
};
