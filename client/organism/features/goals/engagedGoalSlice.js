import { createSlice } from "@reduxjs/toolkit";


const engagedGoalSlice = createSlice({
  name: 'engagedGoal',
  initialState: {
    goal: null
  },
  reducers: {
    setEngagedGoal: (state, { payload }) => {
      state.goal = payload;
    }
  }
});


export const { setEngagedGoal } = engagedGoalSlice.actions;
export default engagedGoalSlice.reducer;
