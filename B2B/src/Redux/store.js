import { configureStore } from "@reduxjs/toolkit";
import accountrequestSlice from "./Slices/accountrequestSlice";
export const store = configureStore({
  reducer: {
    account: accountrequestSlice,
  }
});