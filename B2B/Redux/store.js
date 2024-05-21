import { configureStore } from "@reduxjs/toolkit";
import requestSlice from "./Slices/requestSlice";
export const store = configureStore({
  reducer: {
    account: requestSlice,
  },
});