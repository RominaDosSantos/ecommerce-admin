import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: {},
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
