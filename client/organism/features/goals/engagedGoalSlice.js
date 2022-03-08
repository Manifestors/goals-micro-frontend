import { createSlice } from "@reduxjs/toolkit";


const engagedGoalSlice = createSlice({
  name: 'engagedGoal',
  initialState: {
    goal: null,
    id: null,
  },
  reducers: {
    setEngagedGoal: (state, { payload }) => {
      state.goal = payload;
      state.id = payload.id;
    }
  }
});


export const { setEngagedGoal } = engagedGoalSlice.actions;
export default engagedGoalSlice.reducer;
