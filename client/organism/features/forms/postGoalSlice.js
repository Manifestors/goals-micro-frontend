import { createSlice } from '@reduxjs/toolkit';


export const postGoalSlice = createSlice({
  name: 'postGoal',
  initialState: {
    what: '',
    how: '',
    timeframe: ''
  },
  reducers: {
    appendToWhat: (state, { payload }) => {
      state.what = payload;
    },
    appendToHow: (state, { payload }) => {
      state.how = payload
    },
    setTimeFrame: (state, { payload } ) => {
      state.timeframe = payload;
    },
    clearForm: (state) => {
      state.what = '';
      state.how = '';
      state.timeframe = '';
    }
  }
});


export const { appendToWhat, appendToHow, setTimeFrame, clearForm } = postGoalSlice.actions;
export default postGoalSlice.reducer;
