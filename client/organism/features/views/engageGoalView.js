import { createSlice } from "@reduxjs/toolkit";


const engageGoalView = createSlice({
  name: "engageGoalView",
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


export const { makeViewVisible, makeViewInvisible } = engageGoalView.actions;
export default engageGoalView.reducer;
