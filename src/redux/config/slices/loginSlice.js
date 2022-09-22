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
    logoutUser: (state, action) => {
      return {
        token: null,
      };
    },
  },
});

export const { login, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
