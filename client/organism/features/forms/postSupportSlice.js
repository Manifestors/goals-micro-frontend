import { createSlice } from '@reduxjs/toolkit';


export const postSupportSlice = createSlice({
  name: 'postSupport',
  initialState: {
    msg: '',
  },
  reducers: {
    appendToSupportMessage: (state, { payload }) => {
      state.msg = payload;
    },
    clearForm: (state) => {
      state.msg = '';
    }
  }
});


export const { appendToSupportMessage } = postSupportSlice.actions;
export default postSupportSlice.reducer;
