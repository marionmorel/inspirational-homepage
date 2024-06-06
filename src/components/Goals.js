import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalEntries from "./GoalEntries";
import { addGoalEntry } from "../features/Goals/goalsSlice";

const Goals = () => {
  const [newGoalEntry, setNewGoalEntry] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newGoalEntry === "") {
      return;
    }

    dispatch(addGoalEntry(newGoalEntry));
    setNewGoalEntry("");
  };

  return (
    <div className="goals-list">
      <div className="add-goal">
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={newGoalEntry}
            onChange={(e) => {
              setNewGoalEntry(e.target.value);
            }}
            placeholder="New goal for today"
          />
        </form>
      </div>
      <GoalEntries />
    </div>
  );
};

export default Goals;
