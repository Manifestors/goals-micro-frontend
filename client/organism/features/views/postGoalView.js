import { createSlice } from "@reduxjs/toolkit";


const postGoalView = createSlice({
  name: "postGoalView",
  initialState: {
    view: false
  },
  reducers: {
    makeViewVisible: (state) => {
      state.view = true;
    },
    makeViewInvisible: (state) => {
      state.view = false;
    }
  }
});


export const { makeViewVisible, makeViewInvisible } = postGoalView.actions;
export default postGoalView.reducer;
