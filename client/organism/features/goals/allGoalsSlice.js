import { createSlice } from "@reduxjs/toolkit";


const allGoalsSlice = createSlice({
  name: 'allGoals',
  initialState: {
    goals: [],
    filterBy: ''
  },
  reducers: {
    pushToGoals: (state, { payload }) => {
      state.goals.unshift(payload)
    },
    setFilter: (state, { payload }) => {
      state.filterBy = payload;
    }
  }
});


export const { pushToGoals, setFilter } = allGoalsSlice.actions;
export default allGoalsSlice.reducer;
