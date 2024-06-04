import { configureStore } from "@reduxjs/toolkit";
import requestSlice from "./Slices/requestSlice";
import authSlice from "./Slices/authSlice";


export const store = configureStore({
  reducer: {
    account: requestSlice,
    auth: authSlice,
  },
});