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
    pushToSupportMessages: (state, { payload }) => {
      state.goals = state.goals.map(goal => {
        // make api request to all goals
        // add to support messages of determined goal by id
        const pGoal = current(goal);
        if (payload.belongsTo === pGoal.id) {
          const {sMsgs} = pGoal;
          const currentSupportMsgs = JSON.parse(JSON.stringify(sMsgs));
          const updatedSupportMsgs = [...currentSupportMsgs, payload];
          return {...pGoal, sMsgs: updatedSupportMsgs};
        }
        return pGoal;
      });
    },
    setFilter: (state, { payload }) => {
      state.filterBy = payload;
    }
  }
});


export const { pushToGoals, pushToSupportMessages, setFilter } = allGoalsSlice.actions;
export default allGoalsSlice.reducer;
