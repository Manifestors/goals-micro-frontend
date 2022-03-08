import { createSlice } from "@reduxjs/toolkit";


const postSupportView = createSlice({
  name: "postSupportView",
  initialState: {
    view: false
  },
  reducers: {
    makeSupportViewVisible: (state) => {
      state.view = true;
    },
    makeSupportViewInvisible: (state) => {
      state.view = false;
    }
  }
});


export const { makeSupportViewVisible, makeSupportViewInvisible } = postSupportView.actions;
export default postSupportView.reducer;
