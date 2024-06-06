import React from "react";
import { useSelector } from "react-redux";
import GoalEntry from "./GoalEntry";

const GoalEntries = () => {
  const { entries } = useSelector((state) => state.goals);

  return (
    <>
        {entries.map(({ text, isDone }, index) => (
          <div
            key={text}
            className="goal-card"
          >
            <GoalEntry id={index} isDone={isDone}>
              {text}
            </GoalEntry>
          </div>
        ))}
    </>
  );
};

export default GoalEntries;
