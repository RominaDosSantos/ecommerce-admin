import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";

console.log(loginSlice);

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
