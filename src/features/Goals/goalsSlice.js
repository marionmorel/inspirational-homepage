import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
    name: "goals",
    initialState: {
        entries: [
            { text: "Water plants", isDone: false },
            { text: "Clean up room", isDone: false },
            { text: "Finish project", isDone: false }
        ],
        doneEntries: []
    },
    reducers: {
        addGoalEntry: (state, action) => {
            state.entries.push({ text: action.payload, isDone: false })
        },
        removeGoal: (state, action) => {
            state.entries.splice(action.payload, 1);
        },
        markDone: (state, action) => {
            state.entries[action.payload].isDone = !state.entries[action.payload].isDone;
        }
    }
});

export const { addGoalEntry, removeGoal, markDone } = goalsSlice.actions;

export default goalsSlice.reducer;