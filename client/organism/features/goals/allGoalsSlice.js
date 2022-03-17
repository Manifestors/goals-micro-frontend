import { createSlice, current } from "@reduxjs/toolkit";


const allGoalsSlice = createSlice({
  name: 'allGoals',
  initialState: {
    goals: [],
    filterBy: ''
  },
  reducers: {
    pushToGoals: (state, { payload }) => {
      state.goals.unshift(payload);
    },
    updateGoals: (state, { payload }) => {
      state.goals = state.goals.map(goal => {
        const currentGoal = current(goal);
        if ( currentGoal.id === payload.id) {
          return payload;
        }
        return currentGoal;
      });
    },
    setGoals: (state, {payload}) => {
      state.goals = payload;
    },
    setFilter: (state, { payload }) => {
      state.filterBy = payload;
    },
  }
});


export const { pushToGoals, updateGoals, setFilter, setGoals } = allGoalsSlice.actions;
export default allGoalsSlice.reducer;
