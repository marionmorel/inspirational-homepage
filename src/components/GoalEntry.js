import React from "react";
import { useDispatch } from "react-redux";
import { removeGoal, markDone } from "../features/Goals/goalsSlice";
import Confetti from "react-dom-confetti";

const GoalEntry = ({ children, id, isDone }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      {children}
      <div className="entry-actions-container">
        <button
          aria-label="Remove"
          className="remove btn"
          onClick={() => dispatch(removeGoal(id))}
        >
          Remove
        </button>
        <button
          aria-label="Mark Done"
          className="done btn"
          onClick={() => {
            dispatch(markDone(id));
          }}
        >
          {isDone ? "Redo" : "Done"}
          <Confetti active={isDone} config={{ spread: 360 }} />
        </button>
      </div>
    </div>
  );
};

export default GoalEntry;
