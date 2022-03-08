import { createSlice } from "@reduxjs/toolkit";


const postSupportView = createSlice({
  name: "postSupportView",
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


export const { makeViewVisible, makeViewInvisible } = postSupportView.actions;
export default postSupportView.reducer;
