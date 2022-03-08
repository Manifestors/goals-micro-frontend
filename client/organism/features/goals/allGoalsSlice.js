import { createSlice } from "@reduxjs/toolkit";


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
    pushToSupportMessages: (state, payload) => {
      console.log('Support Msg: ', payload);
      state.goals.forEach(goal => {
        // make api request to all goals
        // add to support messages of determined goal by id
        if (payload.belongsTo === goal.id) {
          console.log('Matching Goal: ', goal);
          goal.sMsgs.push[payload];
        }
      });
    },
    setFilter: (state, { payload }) => {
      state.filterBy = payload;
    }
  }
});


export const { pushToGoals, setFilter } = allGoalsSlice.actions;
export default allGoalsSlice.reducer;
